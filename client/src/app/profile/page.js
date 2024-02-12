import AboutCard from "@/components/aboutCard";
import InterestList from "@/components/interestList";
import UserCard from "@/components/userCard";
import { EllipsisOutlined, LeftOutlined } from "@ant-design/icons";

export default function ProfileUser() {
  return (
    <>
      <div className="flex justify-between pb-5">
        <div>
          <h1 className="text-white text-[16px]">
            <span
              style={{
                fontSize: "16px",
                color: "white",
              }}
            >
              <LeftOutlined />
            </span>
            Back
          </h1>
        </div>
        <h1 className="text-white font-semibold">@jhondoe</h1>
        <EllipsisOutlined
          style={{
            color: "white",
            fontSize: "30px",
          }}
        />
      </div>
      <div>
        <div className="flex flex-col justify-center w-screen items-center gap-5">
          <div className="h-48 w-full px-2">
            <UserCard />
          </div>
          <div className="h-48 w-full px-2">
            <AboutCard />
          </div>
          <div className="h-48 w-full px-2">
            <InterestList />
          </div>
        </div>
      </div>
    </>
  );
}
