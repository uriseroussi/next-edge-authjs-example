'use client';

export default function Page() {
  const makeEdgeRequest = async () => {
    const res = await fetch('/api/v1/edge');
    const json = await res.json();
    console.log(json);
  };

  return (
    <main className="flex flex-col gap-3">
      <h1>Protected</h1>
      <a href="/auth">sign out</a>
      <a href="/">public route</a>

      <div className="mt-12">
        <button onClick={makeEdgeRequest}>Make edge request 1 </button>
      </div>
    </main>
  );
}
