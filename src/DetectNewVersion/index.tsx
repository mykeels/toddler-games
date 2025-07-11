import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { fetchLatestVersion, isNewVersionAvailable } from '@/utils/fetchLatestVersion';
import { useWindowFocus } from '@/hooks/useWindowFocus';
import { useNavigate } from 'react-router';

export const DetectNewVersion = ({
  hasNewVersion = async () => {
    return isNewVersionAvailable();
  },
  getLatestVersion = async () => {
    await fetchLatestVersion();
  },
}: {
  hasNewVersion?: () => Promise<boolean>;
  getLatestVersion?: () => Promise<void>;
}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isCheckingRef = useRef(false);

  const checkForUpdate = useCallback(async () => {
    if (isCheckingRef.current) return;
    isCheckingRef.current = true;
    const hasNew = await hasNewVersion();
    if (hasNew) {
      setShowDrawer(true);
    }
    isCheckingRef.current = false;
  }, [hasNewVersion]);

  // Handle window focus
  useWindowFocus({
    onFocus: () => {
      checkForUpdate();
      // Start interval when focused
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          checkForUpdate();
        }, 60_000);
      }
    },
    onBlur: () => {
      // Stop interval when blurred
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    },
  });

  // Clean up interval on unmount
  useEffect(() => {
    checkForUpdate();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const navigate = useNavigate();

  const handleUpdate = async () => {
    await navigate('/');
    await getLatestVersion();
    window.location.reload();
  };

  return (
    <Drawer open={showDrawer} onOpenChange={setShowDrawer} shouldScaleBackground>
      <DrawerContent className="mfe toddler-games">
        <DrawerHeader>
          <DrawerTitle>New Version Available</DrawerTitle>
          <DrawerDescription>
            A new version of this app is available. Please update to get the latest features and fixes.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleUpdate}>Update Now</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
