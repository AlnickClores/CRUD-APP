"use client";

import EditForm from "@/app/components/editForm";

const getUserDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/userInfo/${id}`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get user data", error);
    return {};
  }
};

const UpdateInfo = async ({ params }) => {
  let updateUserInfo = {};

  updateUserInfo = await getUserDataById(params.id);
  updateUserInfo = updateUserInfo.foundUser;

  return (
    <div>
      <EditForm userData={updateUserInfo} />
    </div>
  );
};

export default UpdateInfo;
