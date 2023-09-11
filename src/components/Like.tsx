import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Like() {
  const [status, setStatus] = useState(false);
  return (
    <>
      {status ? (
        <AiFillHeart
          size="60px"
          color="#ff6b81"
          onClick={() => setStatus(false)}
        ></AiFillHeart>
      ) : (
        <AiOutlineHeart
          size="60px"
          onClick={() => setStatus(true)}
        ></AiOutlineHeart>
      )}
    </>
  );
}
