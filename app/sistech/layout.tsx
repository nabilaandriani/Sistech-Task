import MainLayout from "./layout/MainLayout";

export default function SistechLayout({ children }: { children: React.ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}