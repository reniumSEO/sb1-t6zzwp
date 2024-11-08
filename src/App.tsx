import React, { useState } from 'react';
import { Calculator, TrendingUp, AlertTriangle, PieChart, DollarSign, Clock } from 'lucide-react';

function App() {
  const [investment, setInvestment] = useState<string>('10000');
  const [months, setMonths] = useState<string>('12');

  const calculateReturns = (amount: number, period: number) => {
    const monthlyRate = 0.065; // 6.5% monthly average
    let total = amount;
    for (let i = 0; i < period; i++) {
      total *= (1 + monthlyRate);
    }
    return total;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">TradingPro</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Simulateur d'Investissement</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant Initial (€)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    min="1000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Période (mois)
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="pl-10 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    min="1"
                    max="60"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">Projection des Gains</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-indigo-700">Investissement Initial:</span>
                  <span className="font-medium">{formatCurrency(Number(investment))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-700">Valeur Projetée:</span>
                  <span className="font-medium">
                    {formatCurrency(calculateReturns(Number(investment), Number(months)))}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-700">Gain Potentiel:</span>
                  <span className="font-medium text-green-600">
                    {formatCurrency(calculateReturns(Number(investment), Number(months)) - Number(investment))}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <PieChart className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-800">Performance Mensuelle</h3>
              </div>
              <p className="text-gray-600">
                Rendement mensuel moyen entre <span className="font-semibold text-indigo-600">6%</span> et{' '}
                <span className="font-semibold text-indigo-600">7%</span>
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl shadow-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">Avertissement sur les Risques</h3>
                  <ul className="text-amber-700 space-y-2 text-sm">
                    <li>Les performances passées ne garantissent pas les résultats futurs</li>
                    <li>Le trading comporte des risques de perte en capital</li>
                    <li>Il est recommandé de diversifier vos investissements</li>
                    <li>Consultez un conseiller financier pour des conseils personnalisés</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calculator className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-800">Caractéristiques</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Suivi en temps réel
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Gestion professionnelle
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Reporting mensuel détaillé
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Support client dédié
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;