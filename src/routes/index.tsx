import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <div className="flex flex-col space-y-4 items-center justify-center h-full">
    <h1 className="text-4xl font-bold">Toddler Games</h1>

    <ol className="list-decimal">
        <li>
            <Link to="/find-and-tap/uppercase">Find and Tap (Uppercase Letters only)</Link>
        </li>
        <li>
            <Link to="/find-and-tap/lowercase">Find and Tap (Lowercase Letters only)</Link>
        </li>
        <li>
            <Link to="/find-and-tap/numbers">Find and Tap (Numbers only)</Link>
        </li>
        <li>
            <Link to="/find-and-tap/fruits">Find and Tap (Fruits only)</Link>
        </li>
        <li>
            <Link to="/find-and-tap/animals">Find and Tap (Animals only)</Link>
        </li>
        <li>
            <Link to="/tap-to-count">Tap to Count</Link>
        </li>
        <li>
            <Link to="/free-draw">Free Draw</Link>
        </li>
        
    </ol>
  </div>,
})
