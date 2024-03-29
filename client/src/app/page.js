import { EyeInvisibleOutlined } from "@ant-design/icons";

export default function LoginPage() {
  return (
    <>
      <div className="flex h-[812px] w-[375px] flex-col justify-center align-middle px-6 py-12 bg-gradient-to-bl from-[#254f55] to-[#0E191F]">
        <h2 className="text-2xl font-medium tracking-tight text-white pl-3">
          Login
        </h2>

        <div className="mt-3">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <div className="mt-2 bg-[#253D43] rounded-lg">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Username/Email"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
              </div>
            </div>
            <div>
              <div className="mt-2 rounded-lg bg-[#253D43]">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required=""
                  className="block w-full rounded-md border-0 py-2 text-white shadow-sm bg-[#253D43] placeholder:text-xs px-2"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-[#FDE0BB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
              
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-xs text-white">
            No account?
            <a
              href="/register"
              className="font-medium underline text-[#FDE0BB]"
            >
              Register here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
