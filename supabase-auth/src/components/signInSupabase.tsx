import { supabase } from "../supabase";

const App = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //Formun tarayıcı tarafından gönderilmesini ve sayfayı yenilemesini engelliyoruz.
    e.preventDefault();
    //Form içerisindeki verileri formData olarak alıyoruz.
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Giriş Başarılı");
  };
  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Giriş</h1>

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
      <button>Giriş yap</button>
    </form>
  );
};

export default App;
