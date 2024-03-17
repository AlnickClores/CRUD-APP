// main or homepage
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold md:text-6xl">CRUD APP</h1>
            <p className="py-6">A Simple CRUD App using NextJS</p>
            <Button />
          </div>
        </div>
      </div>
    </main>
  );
}
