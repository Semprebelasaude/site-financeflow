import type { Metadata } from 'next'
import SidebarNav from '@/components/como-usar/SidebarNav'
import { APP_URL, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Como usar o FinanceFlow — Guia completo',
  description:
    'Aprenda a usar o FinanceFlow passo a passo: cadastro, lançamentos, orçamentos, metas e exportação.',
}

export default function ComoUsarPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header da página */}
      <div className="bg-brand-black border-b border-brand-gold/10 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <span className="inline-block text-xs font-semibold text-brand-gold/70 uppercase tracking-wider mb-3">
            Guia de uso
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-offwhite mb-3">
            Como usar o FinanceFlow
          </h1>
          <p className="text-brand-offwhite/60 text-lg">
            Um guia simples, passo a passo. Sem termos técnicos, sem enrolação.
          </p>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <SidebarNav />
          </aside>

          {/* Conteúdo */}
          <article className="prose-legal max-w-none">

            {/* Seção 1 */}
            <section id="o-que-e" className="mb-14 scroll-mt-28">
              <h2>O que é o FinanceFlow</h2>
              <p>
                O FinanceFlow é um aplicativo web de controle financeiro feito para quem trabalha por conta própria —
                autônomos, MEIs e freelancers. Ele te ajuda a saber exatamente quanto entrou, quanto saiu e quanto
                sobrou, tanto na sua vida pessoal quanto no seu negócio. Tudo num lugar só, sem precisar conectar seu
                banco, sem planilha complicada e sem precisar entender de finanças para começar.
              </p>
            </section>

            {/* Seção 2 */}
            <section id="instalar-celular" className="mb-14 scroll-mt-28">
              <h2>Coloque o FinanceFlow na tela do seu celular</h2>
              <p>
                O FinanceFlow funciona pelo navegador do celular ou do computador. Mas você pode adicioná-lo à tela
                inicial do seu celular e ele vai se comportar exatamente como um app instalado da loja — com ícone
                próprio, tela cheia, tudo certo. Sem precisar de atualização manual.
              </p>

              <h3 className="text-lg font-semibold text-brand-dark mt-8 mb-4">No iPhone (Safari)</h3>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-brand-muted">
                <li>Abra o Safari (o navegador padrão do iPhone — tem um ícone de bússola azul).</li>
                <li>
                  Acesse:{' '}
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {APP_URL}
                  </a>
                </li>
                <li>
                  Toque no ícone de compartilhar — é um quadrado com uma seta apontando para cima, no centro da barra
                  de baixo da tela.
                </li>
                <li>
                  Role para baixo na lista que abrir e toque em <strong>&quot;Adicionar à Tela de Início&quot;</strong>.
                </li>
                <li>
                  Escolha o nome que quiser (ou deixe &quot;FinanceFlow&quot;) e toque em{' '}
                  <strong>&quot;Adicionar&quot;</strong> no canto superior direito.
                </li>
                <li>Pronto — um ícone vai aparecer na sua tela inicial.</li>
              </ol>
              <div className="mt-4 p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/20">
                <p className="text-sm text-brand-dark">
                  <strong>Nota importante para iPhone:</strong> Use o Safari. Outros navegadores no iPhone (Chrome,
                  Firefox) não têm essa opção de adicionar à tela inicial.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-brand-dark mt-8 mb-4">No Android (Chrome)</h3>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-brand-muted">
                <li>Abra o Chrome (o navegador com o logo colorido).</li>
                <li>
                  Acesse:{' '}
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {APP_URL}
                  </a>
                </li>
                <li>Toque nos três pontinhos no canto superior direito da tela.</li>
                <li>
                  Toque em <strong>&quot;Instalar app&quot;</strong> ou{' '}
                  <strong>&quot;Adicionar à tela inicial&quot;</strong> (o nome pode variar dependendo do modelo do
                  celular).
                </li>
                <li>
                  Confirme tocando em <strong>&quot;Instalar&quot;</strong> ou <strong>&quot;Adicionar&quot;</strong>.
                </li>
                <li>Pronto — o ícone vai aparecer na sua tela inicial ou na gaveta de apps.</li>
              </ol>

              <h3 className="text-lg font-semibold text-brand-dark mt-8 mb-4">No computador</h3>
              <p>
                Você também pode usar o FinanceFlow diretamente pelo navegador do computador, sem instalar nada. Acesse{' '}
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {APP_URL}
                </a>
                , crie sua conta e comece a usar. O layout se adapta automaticamente à tela maior.
              </p>
            </section>

            {/* Seção 3 */}
            <section id="primeiros-passos" className="mb-14 scroll-mt-28">
              <h2>Criando sua conta e chegando ao início</h2>
              <p>
                <strong>Criar a conta é rápido.</strong> Acesse{' '}
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {APP_URL}
                </a>
                , informe seu nome, e-mail e crie uma senha. Você vai receber um e-mail de confirmação — clique no link
                dentro dele para ativar a conta. Pronto.
              </p>
              <p>
                Quando entrar pela primeira vez, você vai ver o dashboard (a tela principal com seus números). Já vai
                perceber que o app vem com <strong>106 categorias prontas</strong> — alimentação, transporte, saúde,
                receita de cliente, impostos e muito mais. Você pode usar como estão, editar os nomes, mudar as cores
                ou criar novas. Mas não precisa fazer nada disso agora: as categorias já estão prontas para uso.
              </p>
              <p>Explore sem medo. Nada que você fizer vai quebrar nada.</p>
            </section>

            {/* Seção 4 */}
            <section id="pessoal-empresa" className="mb-14 scroll-mt-28">
              <h2>A separação que muda tudo: pessoal e empresa</h2>
              <p>Esse é o coração do FinanceFlow.</p>
              <p>
                Todo lançamento que você faz — seja uma receita ou uma despesa — tem um campo para indicar se é{' '}
                <strong>pessoal</strong> ou <strong>da empresa</strong>. Parece simples, mas é exatamente isso que
                resolve o problema que a maioria dos autônomos e MEIs tem: misturar os dois mundos.
              </p>
              <p>
                Com esse campo preenchido corretamente, o app calcula tudo separado: saldo pessoal, saldo do negócio, o
                que entrou de cada lado, o que saiu. Você vê os dois lados claramente, sem precisar fazer nenhuma
                conta.
              </p>
              <p>
                <strong>A regra prática é simples:</strong> se foi um gasto do seu dia a dia (mercado, farmácia, lazer),
                é pessoal. Se foi um gasto relacionado ao seu trabalho (material, ferramenta, taxa, imposto do negócio),
                é empresa. E se você recebeu de um cliente, é empresa. Se recebeu um presente ou salário de outro
                emprego, é pessoal.
              </p>
              <p>
                Dúvida num caso específico? Use o bom senso — e se errar, você pode editar o lançamento depois.
              </p>
            </section>

            {/* Seção 5 */}
            <section id="lancamentos" className="mb-14 scroll-mt-28">
              <h2>Como registrar o que entrou ou saiu</h2>
              <p>
                Para lançar um gasto ou um recebimento, procure o botão de adicionar (geralmente um &quot;+&quot; na
                tela principal ou no menu). Você vai preencher os seguintes campos:
              </p>
              <ul>
                <li>
                  <strong>Tipo:</strong> Receita (dinheiro que entrou) ou Despesa (dinheiro que saiu)
                </li>
                <li>
                  <strong>Valor:</strong> Quanto foi. Tem uma mini calculadora embutida — você pode digitar
                  &quot;50+30&quot; e o app já calcula.
                </li>
                <li>
                  <strong>Data:</strong> Quando aconteceu. Você pode lançar hoje um gasto de ontem ou da semana
                  passada.
                </li>
                <li>
                  <strong>Categoria:</strong> Onde esse gasto ou receita se encaixa. Escolha uma das 106 categorias
                  disponíveis.
                </li>
                <li>
                  <strong>Pessoal ou empresa:</strong> O campo mais importante — indica a qual lado pertence.
                </li>
                <li>
                  <strong>Forma de pagamento:</strong> Dinheiro, Pix, cartão de crédito, débito, etc.
                </li>
                <li>
                  <strong>Observação (opcional):</strong> Um texto livre para você anotar o que quiser
                  (&quot;mercadinho da esquina&quot;, &quot;cliente João — projeto X&quot;).
                </li>
                <li>
                  <strong>Etiquetas (opcional):</strong> Marcadores extras que você mesmo cria para filtrar depois.
                </li>
              </ul>
              <p>
                Toque em salvar — pronto. O lançamento aparece no seu histórico e os números do dashboard atualizam na
                hora.
              </p>
            </section>

            {/* Seção 6 */}
            <section id="dashboard" className="mb-14 scroll-mt-28">
              <h2>Entendendo a tela principal</h2>
              <p>
                O dashboard é a primeira tela que você vê ao entrar no app. É onde tudo se resume em números claros:
              </p>
              <ul>
                <li>
                  <strong>Saldo atual:</strong> o que sobrou considerando tudo que entrou e saiu.
                </li>
                <li>
                  <strong>Entradas do mês:</strong> total de dinheiro que chegou neste mês.
                </li>
                <li>
                  <strong>Saídas do mês:</strong> total de dinheiro que saiu neste mês.
                </li>
                <li>
                  <strong>Gráfico dos últimos meses:</strong> uma linha ou barra que mostra como o seu saldo evoluiu
                  nos meses anteriores. Serve para você ver tendência — se está melhorando ou piorando.
                </li>
                <li>
                  <strong>Principais categorias:</strong> quais categorias mais pesaram nas despesas do mês.
                </li>
                <li>
                  <strong>Últimos lançamentos:</strong> os registros mais recentes, para você conferir o que foi
                  lançado.
                </li>
              </ul>
              <p>
                Você pode filtrar o dashboard para ver só o pessoal, só o da empresa, ou os dois juntos.
              </p>
            </section>

            {/* Seção 7 */}
            <section id="categorias" className="mb-14 scroll-mt-28">
              <h2>Grupos e subgrupos para organizar seus gastos</h2>
              <p>
                O FinanceFlow já vem com 106 categorias prontas — desde &quot;Alimentação&quot; e &quot;Transporte&quot;
                até &quot;Impostos&quot;, &quot;Honorários de cliente&quot; e &quot;Material de trabalho&quot;. Você
                pode usar assim como está ou personalizar.
              </p>
              <p>
                <strong>Como as categorias funcionam:</strong>
              </p>
              <ul>
                <li>
                  Cada categoria principal pode ter <strong>subcategorias</strong>. Por exemplo: &quot;Alimentação&quot;
                  pode ter &quot;Mercado&quot;, &quot;Restaurante&quot;, &quot;Delivery&quot;. Isso te dá mais detalhe
                  quando quiser.
                </li>
                <li>
                  Cada categoria tem uma <strong>cor</strong> e um <strong>ícone</strong> — você pode mudar para
                  facilitar a identificação visual.
                </li>
                <li>
                  Você pode <strong>criar novas categorias</strong> do zero, se precisar de algo que não existe.
                </li>
                <li>
                  Você pode <strong>editar o nome</strong> de qualquer categoria existente.
                </li>
              </ul>
              <p>
                Para acessar as categorias: vá no menu e procure por &quot;Categorias&quot;. A edição é direta — toque
                na categoria que quer mudar, altere o que precisar e salve.
              </p>
            </section>

            {/* Seção 8 */}
            <section id="recorrencia" className="mb-14 scroll-mt-28">
              <h2>Contas fixas, variáveis e parceladas</h2>
              <p>Algumas despesas se repetem todo mês. O FinanceFlow tem três formas de lidar com isso:</p>

              <div className="mt-6 space-y-6">
                <div className="p-5 rounded-xl border border-brand-gold/20 bg-brand-gold/5">
                  <h3 className="text-brand-dark font-semibold mb-2">Recorrência fixa</h3>
                  <p className="text-brand-muted text-sm">
                    Para contas com valor igual todo mês — como aluguel, mensalidade de academia ou assinatura de
                    serviço. Você cadastra uma vez e o app cria automaticamente o lançamento nos meses seguintes com o
                    mesmo valor. Ele aparece como &quot;pendente&quot; até você confirmar que a conta foi paga.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-brand-gold/20 bg-brand-gold/5">
                  <h3 className="text-brand-dark font-semibold mb-2">Recorrência variável</h3>
                  <p className="text-brand-muted text-sm">
                    Para contas que se repetem mas o valor muda — como conta de luz, água ou telefone. O app cria o
                    lançamento nos meses seguintes, mas deixa o valor em branco para você confirmar e digitar o valor
                    real quando chegar a conta.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-brand-gold/20 bg-brand-gold/5">
                  <h3 className="text-brand-dark font-semibold mb-2">Parcelamento</h3>
                  <p className="text-brand-muted text-sm">
                    Para compras parceladas — uma TV em 12 vezes, por exemplo. Você registra o valor total e a
                    quantidade de parcelas. O app cria uma parcela por mês automaticamente, cada uma com o badge
                    indicando em qual parcela está (como &quot;3/12&quot;). Cada parcela aparece como pendente e você
                    confirma quando pagar.
                  </p>
                </div>
              </div>

              <p className="mt-5">
                Todos os lançamentos recorrentes e parcelados ficam marcados como <strong>pendentes</strong> até você
                confirmar. Isso é intencional: o app não assume que você pagou — você confirma quando realmente
                aconteceu.
              </p>
            </section>

            {/* Seção 9 */}
            <section id="orcamentos" className="mb-14 scroll-mt-28">
              <h2>Defina limites de gasto e receba avisos antes de estourar</h2>
              <p>
                Um orçamento é um limite de gasto que você define para uma categoria em determinado mês. Funciona assim:
              </p>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-brand-muted">
                <li>Vá em &quot;Orçamentos&quot; no menu.</li>
                <li>Escolha a categoria (exemplo: &quot;Alimentação&quot;).</li>
                <li>Defina o valor máximo que quer gastar nesse mês (exemplo: R$ 800).</li>
                <li>Salve.</li>
              </ol>
              <p>
                A partir daí, conforme você lança despesas nessa categoria, uma barra vai preenchendo:
              </p>
              <ul>
                <li>
                  <strong>Verde:</strong> você está dentro do limite, tranquilo.
                </li>
                <li>
                  <strong>Amarela:</strong> você já usou uma parte significativa — atenção.
                </li>
                <li>
                  <strong>Vermelha:</strong> você está perto ou ultrapassou o limite.
                </li>
              </ul>
              <p>
                O objetivo é você saber <strong>antes</strong> de estourar, não depois. Você define o quanto faz sentido
                gastar e o app te avisa quando está chegando no limite.
              </p>
            </section>

            {/* Seção 10 */}
            <section id="metas" className="mb-14 scroll-mt-28">
              <h2>Guarde para um objetivo e acompanhe o progresso</h2>
              <p>
                Uma meta é um valor que você quer juntar para algo específico — uma reserva de emergência, uma viagem,
                um equipamento novo, o que for. Funciona assim:
              </p>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-brand-muted">
                <li>Vá em &quot;Metas&quot; no menu.</li>
                <li>
                  Crie uma nova meta com um nome (exemplo: &quot;Reserva de emergência&quot;) e o valor total que quer
                  guardar (exemplo: R$ 5.000).
                </li>
                <li>Defina uma data-alvo, se quiser.</li>
                <li>Quando guardar dinheiro, registre um aporte nessa meta.</li>
                <li>O app mostra uma barra de progresso com o percentual que já foi guardado.</li>
              </ol>
              <p>
                A ideia é simples: ver o progresso visual te motiva a continuar. E o app calcula quanto ainda falta e em
                quanto tempo você chega lá, baseado no ritmo dos seus aportes.
              </p>
            </section>

            {/* Seção 11 */}
            <section id="exportacao" className="mb-14 scroll-mt-28">
              <h2>Baixe tudo numa planilha quando quiser</h2>
              <p>
                Você pode exportar todos os seus lançamentos para uma planilha — compatível com Excel, Google Planilhas
                e similares. É útil para:
              </p>
              <ul>
                <li>Guardar um backup dos seus dados.</li>
                <li>Compartilhar com seu contador.</li>
                <li>Fazer análises mais detalhadas fora do app.</li>
              </ul>
              <p>
                Para exportar: vá no menu, procure por &quot;Exportar&quot; ou &quot;Relatórios&quot;, escolha o período
                que quer (mês, ano, tudo) e baixe o arquivo. Seus dados são seus — leve-os para onde quiser.
              </p>
            </section>

            {/* Seção 12 */}
            <section id="seguranca" className="mb-14 scroll-mt-28">
              <h2>Sua conta e seus dados protegidos</h2>

              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-3">Redefinir senha por e-mail</h3>
              <p>
                Se você esquecer a senha, na tela de login clique em &quot;Esqueci minha senha&quot;. Digite seu e-mail
                e você vai receber um link para criar uma nova senha. O link tem prazo de validade por segurança.
              </p>

              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-3">Trocar senha dentro do app</h3>
              <p>
                Se estiver logado e quiser trocar a senha, vá nas configurações da sua conta e procure a opção
                &quot;Alterar senha&quot;.
              </p>

              <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-3">Sobre seus dados financeiros</h3>
              <p>
                O FinanceFlow <strong>não acessa sua conta bancária de forma alguma</strong>. Tudo que está registrado
                no app é o que você mesmo digitou. Suas informações trafegam com criptografia e ficam armazenadas de
                forma segura. Somente você tem acesso aos seus lançamentos.
              </p>
              <p>
                Se você quiser excluir sua conta e todos os seus dados, entre em contato pelo e-mail{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </section>

            {/* Seção 13 */}
            <section id="ajuda" className="mb-14 scroll-mt-28">
              <h2>Precisa de ajuda?</h2>
              <p>Tem dúvida, encontrou algum erro ou quer dar uma sugestão? Fala com a gente.</p>
              <ul>
                <li>
                  <strong>E-mail:</strong>{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>
                  <strong>Instagram:</strong>{' '}
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    {INSTAGRAM_HANDLE}
                  </a>
                </li>
              </ul>
              <p>
                A gente lê tudo e responde. O FinanceFlow está em beta — e o feedback de quem usa é o que guia o
                desenvolvimento.
              </p>
            </section>

          </article>
        </div>
      </div>
    </div>
  )
}
