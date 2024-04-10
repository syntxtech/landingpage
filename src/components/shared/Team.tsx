import React from "react";
import Image from "next/image";

const Team = ({ user }: any) => {
  return (
    <div className="flex flex-col p-4 border rounded-md gap-2 max-w-sm">
      <div>
        {" "}
        <Image
          src={user.image}
          height={100}
          width={300}
          alt="profile"
          className="mx-auto rounded-md"
        />
      </div>

      <p className="text-lg">{user.name}</p>
      <p>{user.description}</p>
    </div>
  );
};

export default Team;
