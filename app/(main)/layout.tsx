import BottomTab from "@/components/layout/bottomTab";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen">
            {/* Thêm pb-16 hoặc pb-20 tùy vào độ cao BottomTab của bạn */}
            <main className="flex-1 overflow-auto pb-20">
                {children}
            </main>

            <BottomTab />
        </div>
    );
}
