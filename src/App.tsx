import './App.css'
import { TableauEmbed } from './components/TableauEmbed'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">
          Tableau Visualization Dashboard
        </h1>
        <TableauEmbed 
          url="https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
          options={{ 
            hideTabs: true,
            hideToolbar: true 
          }}
        />
      </div>
    </div>
  )
}

export default App
