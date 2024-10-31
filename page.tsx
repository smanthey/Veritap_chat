import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Veritap</h1>
      <p className="text-xl mb-12">Revolutionize your restaurant's dining experience with our digital menu solutions.</p>
      <Chatbot />
    </main>
  )
}