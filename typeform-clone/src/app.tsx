import { FirstAndSecond } from './components/firstAndSecond'

export function App() {
  return (
    <main className="h-[1610vh]">
      <section className="relative h-[72.7%]">
        <FirstAndSecond />
      </section>

      <section className="relative h-[9.7%]">
        <div className="sticky left-0 right-0 top-0 h-screen bg-yellow-400"></div>
      </section>

      <section className="relative h-[10.1%]">
        <div className="sticky left-0 right-0 top-0 h-screen bg-blue-700"></div>
      </section>
    </main>
  )
}
