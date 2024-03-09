import Link from 'next/link';
import getCurrentUser from '../actions/getCurrentUser';

export default async function PlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  if (currentUser?.role == 'GUESS') {
    return (
      <div className="h-full flex items-center justify-center flex-col">
        <div> Your are not admin, SON OF THE BITCH!!</div>
        <Link
          className="text-[white] text-bold bg-[green] px-[24px] py-[8px] rounded-[8px] hover:bg-[#62ef62]"
          href="/conversations">
          Cút về
        </Link>
      </div>
    );
  }
  return <div className="h-full">{children}</div>;
}
