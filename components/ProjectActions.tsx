"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { deleteProject, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter()

  const handleDeleteProject = async () => {
    setIsDeleting(true)

    const {token} = await fetchToken()

    try {
        await deleteProject(projectId, token)
    } catch (error) {
        
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" alt="edit" width={15} height={15} />
      </Link>

      <button
        type="button"
        className={`flexCenter delete-action_btn  ${
          isDeleting ? "bg-gray" : "bg-pink"
        }`}
      >
        <Image src="/trash.svg" alt="edit" width={15} height={15} />
      </button>
    </>
  );
};

export default ProjectActions;
