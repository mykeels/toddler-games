import FindAndTap from "./FindAndTap/FindAndTap";

function App() {
  const pkgVersion = __APP_VERSION__;

  return (
    <>
      <div className="flex flex-col h-screen text-center p-4">
        <main className="flex-grow max-h-[90dvh]">
          <FindAndTap />
        </main>
        <footer className="text-gray-800 text-sm text-center">
          {pkgVersion}
        </footer>
      </div>
    </>
  );
}

export default App;
