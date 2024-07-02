

function layout({children, users, revenue, notifications}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
        {/* Content from page.tsx */}
        <div>{children}</div>
        <div className="flex gap-3 flex-wrap flex-1">
            <div className="flex flex-col gap-3 flex-1">
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div className="flex flex-1">
                {notifications}
            </div>
        </div>

        
    </div>
  )
}

export default layout