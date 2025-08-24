import { supabase } from "../supabase";

const App = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //Formun tarayıcı tarafından gönderilmesini ve sayfayı yenilemesini engelliyoruz.
    e.preventDefault();
    //Form içerisindeki verileri formData olarak alıyoruz.

    const { error } = await supabase.auth.signOut({});
    console.log(error);
    alert("Çıkış Başarılı");
  };
  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h1>Çıkış Yap</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        defaultValue={"kberktavli@gmail.com"}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={"passw0rd"}
      />
      <br />
      <button>Çıkış Yap</button>
    </form>
  );
};

export default App;
