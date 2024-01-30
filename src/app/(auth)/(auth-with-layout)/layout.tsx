
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
       <div
       style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
       }}>
         <h1>Auth Layout</h1>
       </div>
        <div>{children}</div>
    </div>
  )
}
