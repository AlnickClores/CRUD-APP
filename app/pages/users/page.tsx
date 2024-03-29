import ButtonEdit from "@/app/components/buttonEdit";
import ButtonDelete from "@/app/components/buttonDelete";
import SearchUser from "@/app/components/searchUser";
import Link from "next/link";

const getUserData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/userInfo", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get user data", error);
    return {};
  }
};

export default async function Users() {
  const { userInfo } = await getUserData();

  return (
    <div className="flex flex-col gap-10">
      <div>
        <SearchUser userInfo={userInfo} />
      </div>

      <div>
        <h1 className="text-2xl font-bold m-4">Registered Users</h1>
        {Array.isArray(userInfo) && userInfo.length > 0 ? (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Settings</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map((data) => (
                <tr key={data._id}>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <Link href={`/updateInfo/${data._id}`}>
                      <ButtonEdit />
                    </Link>
                    <ButtonDelete id={data._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No user data available</p>
        )}
      </div>
    </div>
  );
}
