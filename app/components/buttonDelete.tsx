"use client";

import { useRouter } from "next/navigation";

interface ButtonDeleteProps {
  id: string;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ id }) => {
  const router = useRouter();

  const deleteInfo = async () => {
    const isSure = window.confirm("Are you sure you want to delete?");
    if (isSure) {
      const res = await fetch(`http://localhost:3000/api/userInfo/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button className="btn btn-error p-3 mr-3" onClick={deleteInfo}>
      Delete
    </button>
  );
};

export default ButtonDelete;
