import type { Metadata } from 'next'
import { EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos e condições de uso do aplicativo FinanceFlow.',
}

export default function TermosPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-black border-b border-brand-gold/10 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-narrow mx-auto">
          <h1 className="text-3xl font-bold text-brand-offwhite">Termos de Uso</h1>
          <p className="text-brand-offwhite/50 text-sm mt-2">Última atualização: julho de 2026</p>
        </div>
      </div>

      <div className="max-w-narrow mx-auto px-4 sm:px-6 py-12">
        <article className="prose-legal">

          <h2>1. Aceitação dos termos</h2>
          <p>
            Ao criar uma conta e usar o FinanceFlow (
            <a href="https://app.myfinanceflow.online" target="_blank" rel="noopener noreferrer">
              https://app.myfinanceflow.online
            </a>
            ), você concorda com estes Termos de Uso. Se não concordar, não use o serviço.
          </p>

          <h2>2. O que é o FinanceFlow</h2>
          <p>
            O FinanceFlow é um aplicativo web de controle financeiro pessoal e empresarial. Ele permite que você
            registre manualmente receitas e despesas, organize por categorias, acompanhe orçamentos e metas, e exporte
            seus dados. O app está em <strong>versão beta</strong>, em desenvolvimento ativo.
          </p>

          <h2>3. Uso do serviço</h2>
          <ul>
            <li>Você deve ter pelo menos 18 anos para usar o FinanceFlow.</li>
            <li>Você é responsável por manter a confidencialidade da sua senha.</li>
            <li>Você é responsável por todos os dados que registra no app.</li>
            <li>É proibido usar o serviço para fins ilegais ou que violem direitos de terceiros.</li>
            <li>
              É proibido tentar acessar contas de outros usuários ou tentar comprometer a segurança do sistema.
            </li>
          </ul>

          <h2>4. Disponibilidade do serviço</h2>
          <p>
            O FinanceFlow é oferecido em versão beta, sem garantia de disponibilidade contínua. O serviço pode ser
            interrompido temporariamente para manutenção, atualização ou por razões técnicas. Não nos responsabilizamos
            por perdas decorrentes de indisponibilidade do app.
          </p>
          <p>Faremos o razoável para avisar sobre manutenções programadas com antecedência.</p>

          <h2>5. Responsabilidade pelos dados</h2>
          <p>
            Os lançamentos financeiros no FinanceFlow são inseridos manualmente por você. O FinanceFlow{' '}
            <strong>não acessa</strong> sua conta bancária nem valida as informações que você registra. A precisão dos
            dados é de sua responsabilidade.
          </p>
          <p>
            O FinanceFlow não presta serviços de consultoria financeira, contábil ou jurídica. As informações exibidas
            no app são baseadas exclusivamente nos dados que você inseriu.
          </p>

          <h2>6. Propriedade intelectual</h2>
          <p>
            O código, o design, as marcas e os conteúdos do FinanceFlow são de propriedade do FinanceFlow. Os dados que
            você insere são seus — você pode exportá-los a qualquer momento.
          </p>

          <h2>7. Alterações nos termos</h2>
          <p>
            Podemos atualizar estes Termos de Uso. Quando isso acontecer, avisaremos por e-mail ou dentro do app. O uso
            continuado do serviço após a atualização implica aceitação dos novos termos.
          </p>

          <h2>8. Encerramento de conta</h2>
          <p>
            Você pode solicitar o encerramento da sua conta a qualquer momento pelo e-mail{' '}
            <a href={`mailto:${EMAIL}`}>
              <strong>{EMAIL}</strong>
            </a>
            . Seus dados serão excluídos conforme descrito na Política de Privacidade.
          </p>

          <h2>9. Contato</h2>
          <p>
            <strong>E-mail:</strong>{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </article>
      </div>
    </div>
  )
}
