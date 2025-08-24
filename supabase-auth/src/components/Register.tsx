import { supabase } from "./supabase";

const Register = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //Formun tarayıcı tarafından gönderilmesini ve sayfayı yenilemesini engelliyoruz.
    e.preventDefault();
    //Form içerisindeki verileri formData olarak alıyoruz.
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Mailine Git");
  };
  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Kayıt Ol</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={"kadirberk@gmail.com"}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={"passw0rd"}
      />
      <br />
      <button>Kayıt Ol</button>
    </form>
  );
};

export default Register;
