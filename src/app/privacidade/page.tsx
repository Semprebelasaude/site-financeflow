import type { Metadata } from 'next'
import { EMAIL } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como o FinanceFlow coleta, usa e protege seus dados pessoais. Conforme LGPD.',
}

export default function PrivacidadePage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-black border-b border-brand-gold/10 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-narrow mx-auto">
          <h1 className="text-3xl font-bold text-brand-offwhite">Política de Privacidade</h1>
          <p className="text-brand-offwhite/50 text-sm mt-2">Última atualização: julho de 2026</p>
        </div>
      </div>

      <div className="max-w-narrow mx-auto px-4 sm:px-6 py-12">
        <article className="prose-legal">
          <p className="p-4 rounded-xl border border-brand-gold/20 bg-brand-gold/5 text-sm text-brand-muted mb-8">
            Este documento está em sua versão inicial e pode ser revisado à medida que o FinanceFlow evolui. O app está
            em versão beta.
          </p>

          <h2>1. Quem somos</h2>
          <p>
            O FinanceFlow é um aplicativo web de gestão financeira pessoal e empresarial, disponível em{' '}
            <a href="https://app.myfinanceflow.online" target="_blank" rel="noopener noreferrer">
              https://app.myfinanceflow.online
            </a>
            . Para questões relacionadas a este documento, entre em contato pelo e-mail:{' '}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>
            .
          </p>

          <h2>2. Quais dados coletamos</h2>
          <p>Coletamos apenas os dados necessários para que o serviço funcione:</p>
          <ul>
            <li>
              <strong>Dados de cadastro:</strong> nome e endereço de e-mail fornecidos no momento do registro.
            </li>
            <li>
              <strong>Dados financeiros lançados por você:</strong> receitas, despesas, categorias, valores, datas e
              observações que você mesmo digita no app. Esses dados são de sua autoria exclusiva.
            </li>
            <li>
              <strong>Dados de uso básicos:</strong> informações técnicas como tipo de navegador e sistema operacional,
              usadas para melhorar o funcionamento do app (via cookies de analytics — veja a{' '}
              <Link href="/cookies">Política de Cookies</Link>).
            </li>
          </ul>
          <p>
            <strong>O que NÃO coletamos:</strong>
          </p>
          <ul>
            <li>Dados de conta bancária, cartão de crédito ou qualquer instituição financeira.</li>
            <li>
              Dados de terceiros (clientes, fornecedores) além dos que você eventualmente digita nas observações dos
              lançamentos.
            </li>
            <li>Informações de localização.</li>
          </ul>

          <h2>3. Para que usamos seus dados</h2>
          <ul>
            <li>Para criar e manter sua conta no FinanceFlow.</li>
            <li>Para exibir seus lançamentos, dashboards, orçamentos e metas dentro do app.</li>
            <li>Para enviar e-mails transacionais: confirmação de cadastro e recuperação de senha.</li>
            <li>Para análise de uso agregado e melhoria do serviço.</li>
          </ul>
          <p>Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins comerciais.</p>

          <h2>4. Base legal (LGPD)</h2>
          <p>
            O tratamento dos seus dados é feito com base no <strong>consentimento</strong> que você fornece ao criar sua
            conta e aceitar estes termos. Você pode revogar esse consentimento a qualquer momento solicitando a exclusão
            da sua conta.
          </p>

          <h2>5. Seus direitos como titular dos dados</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem direito a:
          </p>
          <ul>
            <li>
              <strong>Acessar</strong> os dados que temos sobre você.
            </li>
            <li>
              <strong>Corrigir</strong> dados incorretos ou desatualizados.
            </li>
            <li>
              <strong>Excluir</strong> seus dados e sua conta.
            </li>
            <li>
              <strong>Exportar</strong> seus dados (use a função de exportação para planilha dentro do app).
            </li>
            <li>
              <strong>Revogar</strong> o consentimento dado.
            </li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail:{' '}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>
            .
          </p>

          <h2>6. Cookies</h2>
          <p>
            Usamos cookies para o funcionamento básico do app (sessão, autenticação) e, com o seu consentimento, para
            analytics básico. Veja a nossa{' '}
            <Link href="/cookies">Política de Cookies</Link> para mais detalhes e para gerenciar suas preferências.
          </p>

          <h2>7. Segurança</h2>
          <p>
            Os dados trafegam com criptografia (HTTPS/TLS). Os lançamentos financeiros ficam armazenados em banco de
            dados protegido. Tomamos medidas razoáveis para proteger suas informações — mas nenhum sistema é 100%
            inviolável, e o app está em versão beta.
          </p>

          <h2>8. Retenção de dados</h2>
          <p>
            Seus dados ficam armazenados enquanto sua conta estiver ativa. Se você solicitar a exclusão da conta,
            excluiremos seus dados pessoais e lançamentos em até 30 dias.
          </p>

          <h2>9. Contato</h2>
          <p>
            <strong>Controlador dos dados:</strong> FinanceFlow<br />
            <strong>E-mail:</strong>{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </article>
      </div>
    </div>
  )
}
