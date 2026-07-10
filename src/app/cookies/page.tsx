import type { Metadata } from 'next'
import { EMAIL } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Como o FinanceFlow utiliza cookies e tecnologias semelhantes.',
}

export default function CookiesPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-black border-b border-brand-gold/10 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-narrow mx-auto">
          <h1 className="text-3xl font-bold text-brand-offwhite">Política de Cookies</h1>
          <p className="text-brand-offwhite/50 text-sm mt-2">Última atualização: julho de 2026</p>
        </div>
      </div>

      <div className="max-w-narrow mx-auto px-4 sm:px-6 py-12">
        <article className="prose-legal">

          <h2>1. O que são cookies</h2>
          <p>
            Cookies são pequenos arquivos de texto que um site salva no seu navegador quando você o visita. Eles servem
            para que o site funcione corretamente (como manter você logado) ou para coletar informações sobre como as
            páginas são usadas.
          </p>

          <h2>2. Quais cookies o FinanceFlow usa</h2>
          <p>Usamos dois tipos de cookies:</p>

          <div className="p-5 rounded-xl border border-gray-200 bg-white mb-4">
            <h3 className="text-brand-dark font-semibold mb-2">Cookies essenciais</h3>
            <p className="text-brand-muted text-sm">
              São necessários para o funcionamento básico do app. Sem eles, o serviço não funciona. Não pedem seu
              consentimento porque são indispensáveis.
            </p>
            <p className="text-brand-muted text-sm mt-2">
              Exemplos: cookie de sessão (mantém você logado), cookie de segurança (CSRF).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-gray-200 bg-white mb-4">
            <h3 className="text-brand-dark font-semibold mb-2">Cookies de analytics</h3>
            <p className="text-brand-muted text-sm">
              São opcionais. Coletam dados anônimos sobre como as páginas são usadas — quantas visitas, quais seções são
              mais acessadas — para nos ajudar a melhorar o serviço. Só são ativados se você aceitar.
            </p>
            <p className="text-brand-muted text-sm mt-2">
              Você pode recusar os cookies de analytics sem perder nenhuma funcionalidade do app.
            </p>
          </div>

          <h2>3. Como gerenciar seus cookies</h2>
          <p>
            Quando você acessar o site pela primeira vez, um banner vai aparecer pedindo sua escolha sobre os cookies de
            analytics. Você pode:
          </p>
          <ul>
            <li>
              <strong>Aceitar todos os cookies</strong> — inclui essenciais + analytics.
            </li>
            <li>
              <strong>Recusar cookies não essenciais</strong> — apenas os cookies essenciais são usados. Esta é a opção
              padrão mais privada.
            </li>
          </ul>
          <p>
            Você pode mudar sua escolha a qualquer momento nas configurações de privacidade do site (link no rodapé).
          </p>
          <p>
            Também pode gerenciar ou excluir cookies diretamente pelo seu navegador. Consulte as configurações do
            navegador que você usa (Chrome, Safari, Firefox, Edge) para mais detalhes.
          </p>

          <h2>4. Cookies de terceiros</h2>
          <p>
            Os cookies de analytics podem ser fornecidos por serviços de terceiros (como Google Analytics). Esses
            serviços têm suas próprias políticas de privacidade. Só são ativados com o seu consentimento.
          </p>

          <h2>5. Contato</h2>
          <p>
            Dúvidas sobre cookies:{' '}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>
          </p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-brand-muted">
              Veja também nossa{' '}
              <Link href="/privacidade">Política de Privacidade</Link> e nossos{' '}
              <Link href="/termos">Termos de Uso</Link>.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
