import { EditOutlined } from "@ant-design/icons";

export default function UserCard() {
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
          <div className="flex" style={{backgroundColor : 'blue'}}>

              <h1 className="text-white font-semibold">@jhondoe123,</h1>
              <h1 className="text-white text-sm">gender</h1>
              <div className="flex justify-between text-white ">
                <h1>Star</h1>
                <h1>Shio </h1>
              </div>
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
