import { DetectNewVersion } from '.';

export default {
  title: 'DetectNewVersion',
  component: DetectNewVersion,
};

export const Index = () => <DetectNewVersion getLatestVersion={async () => {}} hasNewVersion={async () => true} />;
