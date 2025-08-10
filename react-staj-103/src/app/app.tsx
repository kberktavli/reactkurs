// rafce
type Props = {
  emoji: string;
  baslik: string;
  aciklama: string;
}


const Card = (props: Props) => {
  // emoji
  // temizleme
  // 2 randevu
  return (
    <div className="m-4 shadow p-4 flex flex-col gap-4 rounded">
      <span className="text-4xl">{props.emoji}</span>
      <span>{props.baslik}</span>
      <span className="text-gray-400">{props.aciklama}</span>
    </div>
  );
};

const app = () => {
  return (
    <div>
      <Card emoji="☕" baslik="Americano" aciklama="Orta boy" />
      <Card emoji="🍖" baslik="Biftek" aciklama="Büyük boy" />
      <Card emoji="🍜" baslik="Ramen" aciklama="Büyük boy" />
    </div>
  );
};

export default app;