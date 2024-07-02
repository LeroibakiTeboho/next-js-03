function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div className="flex flex-col">
      {/* Content from page.tsx */}
      <div>{children}</div>
      <div className="flex gap-3 flex-wrap flex-1">
        <div className="flex flex-col gap-3 flex-1">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : login
}

export default DashboardLayout;
