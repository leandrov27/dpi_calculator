import { useState } from "react";
import "./App.css";

function App() {
  const [dpiActual, setDpiActual] = useState("");
  const [nuevoDpi, setNuevoDpi] = useState("");
  const [sensActual, setSensActual] = useState("");

  const [newSens, setNewSens] = useState(0);

  const handleCalc = () => {
    const dpiActualNum = parseInt(dpiActual);
    const nuevoDpiNum = parseInt(nuevoDpi);
    const sensActualNum = parseFloat(sensActual);

    if (!isNaN(dpiActualNum) && !isNaN(nuevoDpiNum) && !isNaN(sensActualNum)) {
      const nuevaSensibilidad = (sensActualNum * dpiActualNum) / nuevoDpiNum;
      setNewSens(nuevaSensibilidad);
    } else {
      alert(
        "Error: Los valores de DPI actual, nuevo DPI y sensibilidad actual deben ser números válidos."
      );
    }
  };

  const handleReset = () => {
    setDpiActual("");
    setNuevoDpi("");
    setSensActual("");
    setNewSens(0);
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <header className="bg-gray-900/50 backdrop-blur-2xl border-gray-800 border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <div className="-mx-2 flex items-center gap-2 xl:gap-10 xl:flex-1 xl:shrink-0">
              <a
                href="index.html"
                aria-label="Laravel home"
                title="Laravel home"
                className="inline-flex items-center rounded-md px-2 py-1 transition hover:opacity-75 focus:outline-none focus-visible:ring focus-visible:ring-pink-400/50"
              >
                <svg
                  width="159"
                  height="59"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="currentColor"
                    d="M56 13.728C56 7.261 50.645 2 44.062 2c-5.25 0-9.836 3.414-11.376 8.202a9.768 9.768 0 0 0-1.371 0C29.773 5.414 25.188 2 19.938 2C13.355 2 8 7.261 8 13.728c0 5.521 3.919 10.175 9.169 11.407a18.702 18.702 0 0 0-1.038 4.619c-.233 2.35.694 4.793 2.609 6.878c1.374 1.496 3.117 2.662 4.815 3.306a16.664 16.664 0 0 0-1.868 3.648c-6.78 3.612-9.44 11.831-1.105 15.758C27.707 62.686 37.195 60.978 44.89 62c-6.79-1.566-14.443-1.229-20.967-3.631c-4.063-1.482-6.805-5.483-3.345-9.097a29.174 29.174 0 0 0-.063 1.896c0 1.756.857 3.218 2.489 4.264v.049c0 1.627 1.387 2.951 3.092 2.951h1.475c.964 0 1.864-.434 2.442-1.145c1.323.086 2.652.086 3.976 0a3.15 3.15 0 0 0 2.44 1.145h1.476c1.705 0 3.092-1.324 3.092-2.992v-.008c1.632-1.046 2.489-2.509 2.489-4.264c0-5.523-1.38-8.752-3.04-11.231c1.696-.643 3.438-1.808 4.812-3.304c1.916-2.085 2.844-4.527 2.611-6.878a18.756 18.756 0 0 0-1.037-4.62C52.081 23.903 56 19.249 56 13.728m-37.387 8.168c-3.773-.218-6.774-3.272-6.774-6.994c0-3.863 3.233-7.006 7.208-7.006c3.089 0 5.795 1.914 6.792 4.677c-2.635 2.012-5.059 5.14-7.226 9.323m22.952 29.272c0 1.244-.673 2.203-2.058 2.93l-.678.356l.203.731c.029.104.043.186.043.295c0 .582-.525 1.055-1.172 1.055h-1.476c-.467 0-.888-.252-1.075-.641l-.285-.598l-.665.057a28.162 28.162 0 0 1-4.807 0l-.667-.057l-.285.598c-.187.389-.608.641-1.075.641h-1.475c-.646 0-1.172-.473-1.172-1.096c0-.068.014-.149.042-.254l.203-.731l-.678-.356c-1.384-.727-2.057-1.686-2.057-2.93c0-5.189 1.226-8.114 3.101-10.733c.182.021.366.05.542.054c.2.102.597.412.894.644c1.088.85 2.731 2.133 5.029 2.133c2.295 0 3.938-1.282 5.026-2.132c.297-.232.694-.543.895-.645c.176-.004.359-.033.541-.054c1.879 2.618 3.106 5.544 3.106 10.733m-3.776-12.574c-1.449 0-2.988 2.775-5.788 2.775c-2.803 0-4.34-2.775-5.791-2.775c-3.033 0-8.628-4.002-8.168-8.654c.265-2.666 1.208-5.213 2.04-7.054c.063-.033.044-.035.016-.03c1.353-2.759 5.021-8.355 8.478-9.9c.647-.289 2.541-.882 3.425-.882c.884 0 2.777.593 3.423.881c3.47 1.55 7.155 7.178 8.495 9.931c-.096 0-.045.003.002.005c.828 1.841 1.771 4.386 2.036 7.049c.46 4.652-5.136 8.654-8.168 8.654m7.599-16.698c-2.189-4.24-4.568-7.309-7.227-9.325c.999-2.762 3.703-4.675 6.791-4.675c3.975 0 7.209 3.143 7.209 7.006c0 3.723-3 6.776-6.773 6.994"
                  />
                  <path
                    fill="currentColor"
                    d="M32.001 33.389c-.51 0-2.214.045-2.77.623c-.395.411-.089 1.434.962 2.313c.665.557 1.298.731 1.807.731s1.143-.175 1.807-.731c1.052-.88 1.356-1.902.963-2.313c-.555-.578-2.26-.623-2.769-.623"
                  />
                  <ellipse
                    cx="25.429"
                    cy="27.333"
                    fill="currentColor"
                    rx="2.88"
                    ry="2.844"
                  />
                  <ellipse
                    cx="38.57"
                    cy="27.333"
                    fill="currentColor"
                    rx="2.879"
                    ry="2.844"
                  />
                  <path
                    fill="currentColor"
                    d="M32.975 37.941a2.463 2.463 0 0 0-.792.189a2.662 2.662 0 0 0-.68.424c-.198.172-.404.398-.46.693c.258-.104.51-.129.741-.215c.237-.07.459-.162.683-.249c.218-.099.436-.194.646-.306c.22-.09.401-.248.678-.28c-.198-.242-.552-.272-.816-.256"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-end gap-6">
              <div className="flex gap-2 items-center">
                <a
                  target="_blank"
                  href="https://github.com/leandrov27"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-pink-400/50"
                >
                  <svg
                    className="w-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://instagram.com/leoleandro_v27"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-pink-400/50"
                >
                  <svg
                    className="w-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.903 4.903 0 0 0 1.153 1.772a4.903 4.903 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.772-1.153a4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772a4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.098 3.098 0 0 1-1.15-.748a3.098 3.098 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://twitter.com/valdezalbert27"
                  className="rounded-md p-1 text-gray-400 transition-colors hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-pink-400/50"
                >
                  <svg
                    className="w-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <g fill="none">
                      <g clip-path="url(#primeTwitter0)">
                        <path
                          fill="currentColor"
                          d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                        />
                      </g>
                      <defs>
                        <clipPath id="primeTwitter0">
                          <path fill="#fff" d="M0 0h14v14H0z" />
                        </clipPath>
                      </defs>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main role="main" className="1 lg:flex lg:flex-1 lg:flex-col">
        <div className="pointer-events-none absolute inset-0 h-[900px] w-full overflow-hidden">
          <img
            style={{
              position: "absolute",
              width: "700px",
              height: "700px",
              left: "-20%",
              top: "316px",
              animationDelay: "1s",
              animationDuration: "4.25s",
            }}
            src="img/blur.svg"
            className="animate-pulse-slow"
          />
          <img
            style={{
              position: "absolute",
              width: "700px",
              height: "700px",
              right: "-25%",
              top: "-120px",
            }}
            src="img/blur.svg"
            className="animate-pulse-slow"
          />
        </div>

        <div className="relative">
          <div className="pt-12 text-center sm:pt-10">
            <h1 className="mx-auto max-w-4xl px-16 text-center text-5xl font-semibold leading-tight sm:text-6xl">
              The most productive way to calculate you new sens.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-xl font-normal text-gray-400"></p>

            <div className="pt-3 flex items-center justify-center gap-6">
              <div className="docsearch-input__wrapper relative md:block">
                <input
                  className="docsearch-input border-gray-900/60 block w-full rounded-[10px] border bg-gray-850 pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition-color focus-visible:border-gray-900 focus-visible:ring-1 focus-visible:ring-pink-400/50"
                  type="text"
                  placeholder="DPI ACTUAL"
                  value={dpiActual}
                  onChange={(e) => setDpiActual(e.target.value)}
                />

                <div
                  className="pointer-events-none absolute inset-0 left-3 flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z" />
                      <path strokeLinecap="round" d="M12 5v3" opacity="0.5" />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="docsearch-input__wrapper relative md:block">
                <input
                  className="docsearch-input border-gray-900/60 block w-full rounded-[10px] border bg-gray-850 pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition-color focus-visible:border-gray-900 focus-visible:ring-1 focus-visible:ring-pink-400/50"
                  type="text"
                  placeholder="NUEVO DPI"
                  value={nuevoDpi}
                  onChange={(e) => setNuevoDpi(e.target.value)}
                />

                <div
                  className="pointer-events-none absolute inset-0 left-3 flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 6v3l4-4l-4-4v3c-4.42 0-8 3.58-8 8c0 1.57.46 3.03 1.24 4.26L6.7 14.8A5.87 5.87 0 0 1 6 12c0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8c0 3.31-2.69 6-6 6v-3l-4 4l4 4v-3c4.42 0 8-3.58 8-8c0-1.57-.46-3.03-1.24-4.26"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-center gap-6">
              <div className="docsearch-input__wrapper relative md:block">
                <input
                  className="docsearch-input border-gray-900/60 block w-full rounded-[10px] border bg-gray-850 pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition-color focus-visible:border-gray-900 focus-visible:ring-1 focus-visible:ring-pink-400/50"
                  type="text"
                  placeholder="SENS ACTUAL"
                  value={sensActual}
                  onChange={(e) => setSensActual(e.target.value)}
                />

                <div
                  className="pointer-events-none absolute inset-0 left-3 flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.637 18.363q-1.235-1.24-1.936-2.87T3 12q0-1.87.701-3.499q.7-1.63 1.936-2.864l.713.713q-1.1 1.1-1.725 2.55T4 12q0 1.675.625 3.125T6.35 17.65zm2.825-2.825q-.685-.69-1.074-1.595Q7 13.038 7 12q0-1.044.388-1.95q.389-.904 1.074-1.588l.713.713q-.55.55-.862 1.275T8 12t.313 1.55t.862 1.275zM12 13q-.402 0-.701-.299T11 12t.299-.701T12 11t.701.299T13 12t-.299.701T12 13m3.538 2.538l-.713-.713q.55-.55.863-1.275T16 12t-.312-1.55t-.863-1.275l.713-.713q.685.684 1.074 1.589Q17 10.956 17 12q0 1.038-.388 1.943t-1.074 1.595m2.825 2.825l-.713-.713q1.1-1.1 1.725-2.55T20 12q0-1.656-.625-3.106T17.65 6.35l.713-.713Q19.598 6.87 20.3 8.5T21 12q0 1.863-.701 3.493q-.7 1.63-1.936 2.87"
                    />
                  </svg>
                </div>
              </div>

              <div className="docsearch-input__wrapper relative md:block">
                <input
                  className="border-gray-900/60 block w-full rounded-[10px] border bg-gray-850 pl-10 pr-4 py-2.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition-color focus-visible:border-gray-900 focus-visible:ring-1 focus-visible:ring-pink-400/50"
                  type="text"
                  disabled
                  value={newSens}
                  style={{
                    fontWeight: "bold",
                  }}
                />

                <div
                  className="pointer-events-none absolute inset-0 left-3 flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.17em"
                    height="1em"
                    viewBox="0 0 1792 1536"
                  >
                    <g transform="translate(1792 0) scale(-1 1)">
                      <path
                        fill="currentColor"
                        d="M1376 1280h32V640h-32q-35 0-67.5-12t-62.5-37t-50-46t-49-54q-8-9-12-14q-72-81-112-145q-14-22-38-68q-1-3-10.5-22.5t-18.5-36t-20-35.5t-21.5-30.5T896 128q-71 0-115.5 30.5T736 256q0 43 15 84.5t33 68t33 55t15 48.5H256q-50 0-89 38.5T128 640q0 52 38 90t90 38h331q-15 17-25 47.5T552 871q0 69 53 119q-18 32-18 69t17.5 73.5T652 1185q-4 24-4 56q0 85 48.5 126t135.5 41q84 0 183-32t194-64t167-32m288-64q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-576v640q0 53-37.5 90.5T1664 1408h-288q-59 0-223 59q-190 69-317 69q-142 0-230-77.5T519 1241l1-5q-61-76-61-178q0-22 3-43q-33-57-37-119H256q-105 0-180.5-76T0 639q0-103 76-179t180-76h374q-22-60-22-128q0-122 81.5-189T896 0q38 0 69.5 17.5t55 49.5t40.5 63t37 72t33 62q35 55 100 129q2 3 14 17t19 21.5t20.5 21.5t24 22.5t22.5 18t23.5 14t21.5 4.5h288q53 0 90.5 37.5T1792 640"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {newSens != 0 && (
              <p className="text-center mt-2 text-sm font-semibold text-gray-400">
                Su nueva sensibilidad a {nuevoDpi} DPI es de: {newSens}
              </p>
            )}

            <div className="pt-0 flex items-center justify-center gap-6">
              <a
                onClick={handleCalc}
                className="mt-8 inline-flex px-8 py-2.5 rounded-[10px] bg-pink-400 text-white uppercase font-medium transition hover:opacity-90 focus-visible:outline-none focus-visible:!ring-1 focus-visible:!ring-white"
                style={{
                  background:
                    "linear-gradient(109.48deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%), #ee5d99",
                  boxShadow:
                    "inset 0px -1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                CHECK RESULT
              </a>

              {newSens != 0 && (
                <a
                  onClick={handleReset}
                  className="mt-8 inline-flex px-8 py-2.5 rounded-[10px] bg-pink-400 text-white uppercase font-medium transition hover:opacity-90 focus-visible:outline-none focus-visible:!ring-1 focus-visible:!ring-white"
                  style={{
                    background:
                      "linear-gradient(109.48deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%), #ee5d99",
                    boxShadow:
                      "inset 0px -1px 0px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 21 21"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M14.5 3.5c2.414 1.377 4 4.022 4 7a8 8 0 1 1-8-8" />
                      <path d="M14.5 7.5v-4h4" />
                    </g>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="py-24 md:pt-15">
            <blockquote className="mx-auto max-w-4xl px-6">
              <p className="text-center mt-0 text-sm font-semibold text-gray-400">
                Developed By
              </p>

              <div className="mt-2 flex items-center justify-center gap-6">
                <img className="w-[73px] shrink-0" src="img/leandro.png" />

                <div>
                  <cite className="font-medium not-italic text-white">
                    Leandro Valdez
                  </cite>

                  <p className="mt-1 text-sm text-gray-400">
                    Fullstack Developer
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
