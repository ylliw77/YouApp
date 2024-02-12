import { EditOutlined } from "@ant-design/icons";

export default function AboutCard() {
  return (
    <>
      <div
        className="card w-full h-full mx-auto shadow-lg bg-local rounded-3xl bg-[#162329]"
        style={{
          backgroundImage: "url(" + "" + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between px-3 py-2">
          <div className="flex flex-col">
            <h1 className="text-white text-sm px-5 font-semibold">About</h1>
          </div>

          <EditOutlined
            style={{
              color: "white",
            }}
          />
        </div>
      </div>
    </>
  );
}
