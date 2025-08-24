const ProductAdd = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("email");
    const price = formData.get("password");

    const { data, error } = await supabase.auth.signUp({
      email: email as string,
      password: password as string,
    });
    console.log(data, error);
    alert("Mailine Git");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Ürün ekleme</h1>
      <input
        type="text"
        placeholder="Ürün Adı"
        name="name"
        defaultValue={"iphone"}
      />
    </form>
  );
};
