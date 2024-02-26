export default function Page({ params }) {
  console.log(params);
  return (
    <div>
      <p>You're in the dynamic route ({params.id}) now</p>
    </div>
  );
}
