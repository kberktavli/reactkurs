import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { supabase } from "./supabase";
import { User } from "./Home";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //usss
  const [user, setUser] = useState<User>();
  //uffs
  useEffect(() => {
    supabase
      .from("USERS")
      .select()
      .eq("id", id) // equal yani eşitlik, id kolonunun değeri id değişkeninie eşit olan satıra al.
      .single() //bana bir nesne döndür, array değil, eğer birden fazla satır varsa hata ver diyor.
      .then((res) => setUser(res.data as User));
  }, []);

  const handleDelete = () => {
    const isDelete = confirm(user?.name + "silinsin mi ?");
    if (!isDelete) {
      return;
    }
    supabase
      .from("USERS")
      .delete()
      .eq("id", id)
      .then(({ error }) => {
        if (error) {
          alert("Bir hata oluştur: " + error);
          console.log(error);
        } else {
          alert(user?.name + "silindi");
          navigate("/");
        }
      });
  };

  return (
    <ul>
      <li>Id: {user?.id}</li>
      <li>Name : {user?.name}</li>
      <button
        onClick={() => navigate("/users/" + user?.id + "/edit")}
        className="bg-blue-500"
      >
        Edit
      </button>
      <button onClick={handleDelete} className="bg-red-500">
        Delete
      </button>
    </ul>
  );
};

export default UserDetail;
