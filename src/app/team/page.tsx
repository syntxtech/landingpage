import Team from "@/components/shared/Team";
import { teamMembers } from "@/constants";
import React from "react";
import { TbUserHeart } from "react-icons/tb";

const Teams = () => {
  return (
    <div className="flex flex-col w-full max-w-5xl justify-center items-center mx-auto my-20">
      <div className="flex items-center text-xl gap-4">
        {" "}
        <p>Meet The Team</p> <TbUserHeart size={24} />
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mt-6">
        {teamMembers.map((user) => (
          <Team user={user} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
