import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          "text-6xl",
          "font-bold",
          "text-blue-500",
          "hover:text-white",
          "hover:bg-blue-500",
          "transition",
          "duration-300",
        )}
      >
        texto no meu h1
      </h1>
    </div>
  );
}
