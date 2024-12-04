'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  text: string
  sender: 'user' | 'bot'
}

export default function SunChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Sun. How can I help you today?", sender: 'bot' }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() === '') return

    const newUserMessage: Message = { text: inputMessage, sender: 'user' }
    setMessages(prevMessages => [...prevMessages, newUserMessage])

    // Simulate bot response (replace with actual chatbot logic)
    setTimeout(() => {
      const botResponse: Message = { text: "I'm sorry, I'm just a demo. I can't actually respond to your messages.", sender: 'bot' }
      setMessages(prevMessages => [...prevMessages, botResponse])
    }, 1000)

    setInputMessage('')
  }

  return (
    <Card className="w-[350px] h-[500px] flex flex-col">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="text-xl font-bold">Sun</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

