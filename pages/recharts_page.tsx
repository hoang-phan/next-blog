import type { NextPage } from 'next'
import dynamic from "next/dynamic";

const Recharts = dynamic(
  import("../components/Recharts"),
  { ssr: false }
);

const RechartsPage: NextPage = () => {
  return (
    <Recharts />
  );
}

export default RechartsPage
