import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Compare = () => {
  const comparisonData = [
    {
      feature: 'Nigerian Law Database',
      lawexa: true,
      lawPavilion: true,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: true
    },
    {
      feature: 'AI-Powered Legal Analysis',
      lawexa: true,
      lawPavilion: false,
      chatGPT: true,
      gemini: true,
      harvey: true,
      caseRadar: false
    },
    {
      feature: 'Contract Generation',
      lawexa: true,
      lawPavilion: false,
      chatGPT: false,
      gemini: false,
      harvey: true,
      caseRadar: false
    },
    {
      feature: 'Legal Document Analysis',
      lawexa: true,
      lawPavilion: false,
      chatGPT: true,
      gemini: true,
      harvey: true,
      caseRadar: false
    },
    {
      feature: 'Nigerian Court Decisions',
      lawexa: true,
      lawPavilion: true,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: true
    },
    {
      feature: 'Real-time Legal Updates',
      lawexa: true,
      lawPavilion: true,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: true
    },
    {
      feature: 'Student-Friendly Pricing',
      lawexa: true,
      lawPavilion: false,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: false
    },
    {
      feature: 'Academic Tools & Resources',
      lawexa: true,
      lawPavilion: false,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: false
    },
    {
      feature: 'Lawyer Connect Feature',
      lawexa: true,
      lawPavilion: false,
      chatGPT: false,
      gemini: false,
      harvey: false,
      caseRadar: false
    },
    {
      feature: 'Local Language Support',
      lawexa: true,
      lawPavilion: false,
      chatGPT: true,
      gemini: true,
      harvey: false,
      caseRadar: false
    }
  ];

  const competitors = [
    { name: 'Lawexa', key: 'lawexa', color: 'bg-primary text-white' },
    { name: 'Law Pavilion', key: 'lawPavilion', color: 'bg-gray-100' },
    { name: 'ChatGPT', key: 'chatGPT', color: 'bg-gray-100' },
    { name: 'Gemini', key: 'gemini', color: 'bg-gray-100' },
    { name: 'Harvey', key: 'harvey', color: 'bg-gray-100' },
    { name: 'Case Radar', key: 'caseRadar', color: 'bg-gray-100' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Lawexa Compares
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why Lawexa is the best choice for Nigerian legal professionals and students
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-white rounded-lg shadow-large overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left p-6 bg-muted font-bold text-foreground">
                    Features
                  </th>
                  {competitors.map(competitor => (
                    <th 
                      key={competitor.key}
                      className={`text-center p-6 font-bold ${competitor.color} ${
                        competitor.key === 'lawexa' ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {competitor.name}
                      {competitor.key === 'lawexa' && (
                        <div className="text-xs font-normal mt-1 opacity-90">
                          (You're here!)
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-medium text-foreground border-r border-border">
                      {row.feature}
                    </td>
                    {competitors.map(competitor => (
                      <td key={competitor.key} className="p-6 text-center border-r border-border">
                        {row[competitor.key as keyof typeof row] ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of Nigerian legal professionals who trust Lawexa
            </p>
            <Link 
              to="/signup"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;