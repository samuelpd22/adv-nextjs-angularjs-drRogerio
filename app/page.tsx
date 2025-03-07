import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Check,
  ChevronRight,
  Facebook,
  FileText,
  Gavel,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Scale,
  Shield,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Scale className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Juris Consulta</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#areas" className="text-sm font-medium hover:text-primary transition-colors">
              Áreas de Atuação
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Nós
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
              Depoimentos
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-primary" />
              <span>(31) 3841-4433</span>
            </div>
            <Button size="sm" className="rounded-full shadow-md hover:shadow-lg transition-all">
              Agendar Consulta
            </Button>
            <Button variant="outline" size="icon" className="md:hidden rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Scale className="mr-2 h-3.5 w-3.5" />
                  <span>Advocacia Especializada</span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Excelência e Dedicação em <span className="text-primary">Processos Cíveis e Previdenciário</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                    Defendemos seus direitos com comprometimento e experiência. Nossa equipe está pronta para oferecer as melhores soluções jurídicas para seu caso.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                    Consulta Gratuita <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-primary/20 hover:bg-primary/5 transition-all"
                  >
                    Conheça Nossos Serviços
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  Atendimento personalizado e confidencial para cada cliente.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 blur-sm"></div>
                <Image
                  src="https://diariodocomercio.com.br/wp-content/uploads/2020/02/advocacia-202.png"
                  width={550}
                  height={550}
                  alt="Equipe de advogados"
                  className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl object-cover object-center shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 border-y border-primary/10 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">2500+</p>
                <p className="text-sm text-muted-foreground">Casos Resolvidos</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground">Processos em andamento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="areas" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Gavel className="mr-2 h-3.5 w-3.5" />
                <span>Áreas de Atuação</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight max-w-[800px]">
                Soluções jurídicas especializadas para cada necessidade
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Nosso escritório oferece atendimento especializado em diversas áreas do Direito Civil, com foco na
                resolução eficiente de conflitos.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group bg-background border border-primary/10 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Contratos e Obrigações</CardTitle>
                  <CardDescription className="text-base">
                    Elaboração, análise e revisão de contratos civis e comerciais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground">
                    Assessoria completa em contratos de compra e venda, locação, prestação de serviços e muito mais.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="#" className="text-primary text-sm font-medium flex items-center hover:underline">
                    Saiba mais <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group bg-background border border-primary/10 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Direito de Família</CardTitle>
                  <CardDescription className="text-base">
                    Divórcio, pensão alimentícia, guarda de filhos e partilha de bens.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground">
                    Atuamos com sensibilidade e eficiência em questões familiares, buscando sempre a melhor solução.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="#" className="text-primary text-sm font-medium flex items-center hover:underline">
                    Saiba mais <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group bg-background border border-primary/10 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Responsabilidade Civil</CardTitle>
                  <CardDescription className="text-base">
                    Indenizações por danos morais, materiais e estéticos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground">
                    Defendemos seus direitos em casos de acidentes, erro médico, relações de consumo e outras situações.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="#" className="text-primary text-sm font-medium flex items-center hover:underline">
                    Saiba mais <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="group bg-background border border-primary/10 shadow-sm hover:shadow-md transition-all overflow-hidden md:col-span-2 lg:col-span-3">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="relative z-10">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-3">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Contencioso Cível</CardTitle>
                  <CardDescription className="text-base">
                    Representação em processos judiciais e extrajudiciais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground">
                    Atuamos em todas as instâncias judiciais, com estratégias personalizadas para cada caso. Nossa
                    equipe possui ampla experiência em litígios complexos e mediação de conflitos.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="#" className="text-primary text-sm font-medium flex items-center hover:underline">
                    Saiba mais <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre" className="relative w-full py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 blur-sm"></div>
                <Image
                  src="https://static.vecteezy.com/ti/fotos-gratis/p1/14389825-negocios-e-advogados-discutindo-documentos-de-contrato-com-escala-de-latao-na-mesa-no-escritorio-direito-servicos-juridicos-aconselhamento-justica-e-conceito-de-direito-gratis-foto.jpg"
                  width={600}
                  height={400}
                  alt="Escritório de advocacia"
                  className="relative mx-auto aspect-video overflow-hidden rounded-2xl object-cover object-center shadow-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary self-start">
                  <Scale className="mr-2 h-3.5 w-3.5" />
                  <span>Sobre Nós</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Tradição e inovação a serviço da justiça
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground md:text-lg">
                      Fundado em 2005, o escritório Juris Consulta construiu uma sólida reputação baseada na excelência
                      técnica e no atendimento personalizado aos clientes.
                    </p>
                    <p className="text-muted-foreground md:text-lg">
                      Nossa equipe é formada por advogados especializados, com vasta experiência acadêmica e
                      profissional, comprometidos com a ética e a busca pelos melhores resultados.
                    </p>
                    <p className="text-muted-foreground md:text-lg">
                      Combinamos o conhecimento jurídico tradicional com abordagens inovadoras e tecnologia de ponta
                      para oferecer soluções eficientes e personalizadas para cada cliente.
                    </p>
                  </div>
                </div>
                <Button className="rounded-full shadow-md hover:shadow-lg transition-all self-start">
                  Conheça Nossa Equipe <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Users className="mr-2 h-3.5 w-3.5" />
                <span>Depoimentos</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight max-w-[800px]">
                O que nossos clientes dizem
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                A satisfação de nossos clientes é o nosso maior reconhecimento.
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative bg-background/80 backdrop-blur-sm border-primary/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 blur-sm"></div>
                        <Image
                          src="https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/71763056_2471881889724693_1992757150513889280_n.jpg?ccb=11-4&oh=01_Q5AaILkHsTEwG5CBl3HrJp2wganU9u6RfdltL7ELLNso06cX&oe=67D7EEA6&_nc_sid=5e03e0&_nc_cat=105"
                          width={60}
                          height={60}
                          alt="Cornelio Xisto"
                          className="relative rounded-full border-2 border-background"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Carlos Oliveira</CardTitle>
                        <CardDescription>Cliente desde 2014</CardDescription>
                      </div>
                      <div className="ml-auto text-4xl text-primary/20">"</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      O escritório Juris Consulta foi fundamental na resolução do meu processo de indenização.
                      Profissionais extremamente competentes e atenciosos. Recomendo sem hesitar.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative bg-background/80 backdrop-blur-sm border-primary/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 blur-sm"></div>
                        <Image
                          src="https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/353827009_776708890907885_8259966638432294306_n.jpg?ccb=11-4&oh=01_Q5AaIKChCvg4NoEB0nCyhPGAKUoAnsbDQP7Qri5bcfgbjhFP&oe=67D7DF67&_nc_sid=5e03e0&_nc_cat=108"
                          width={60}
                          height={60}
                          alt="Ana Beatriz Santos"
                          className="relative rounded-full border-2 border-background"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Nardey Perpetuo</CardTitle>
                        <CardDescription>Cliente desde 2020</CardDescription>
                      </div>
                      <div className="ml-auto text-4xl text-primary/20">"</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      Meu processo de divórcio foi conduzido com muita sensibilidade e profissionalismo. A equipe me
                      manteve informada em cada etapa e conseguiu um acordo muito favorável.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative bg-background/80 backdrop-blur-sm border-primary/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 blur-sm"></div>
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          width={60}
                          height={60}
                          alt="Roberto Mendes"
                          className="relative rounded-full border-2 border-background"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Roberto Mendes</CardTitle>
                        <CardDescription>Cliente desde 2019</CardDescription>
                      </div>
                      <div className="ml-auto text-4xl text-primary/20">"</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      Excelente assessoria na revisão de contratos da minha empresa. Identificaram cláusulas
                      problemáticas que poderiam ter nos causado grandes prejuízos no futuro.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative bg-background/80 backdrop-blur-sm border-primary/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 blur-sm"></div>
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          width={60}
                          height={60}
                          alt="Mariana Costa"
                          className="relative rounded-full border-2 border-background"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Mariana Costa</CardTitle>
                        <CardDescription>Cliente desde 2021</CardDescription>
                      </div>
                      <div className="ml-auto text-4xl text-primary/20">"</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      Após tentar outros escritórios sem sucesso, encontrei no Juris Consulta a solução para meu caso de
                      responsabilidade civil. Profissionais dedicados e resultado excelente.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços/Planos */}
        <section id="servicos" className="relative w-full py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 z-0"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <FileText className="mr-2 h-3.5 w-3.5" />
                <span>Serviços</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight max-w-[800px]">
                Soluções jurídicas para suas necessidades
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Oferecemos diferentes modalidades de atendimento para melhor atender às suas necessidades.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative h-full bg-background/80 backdrop-blur-sm border-primary/10 shadow-md flex flex-col">
                  <CardHeader>
                    <CardTitle>Consultoria Jurídica</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold">R$300</span>
                      <span className="text-muted-foreground">/consulta</span>
                    </div>
                    <CardDescription className="text-base mt-2">
                      Orientação jurídica pontual para dúvidas específicas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Análise da situação</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Orientação jurídica</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Esclarecimento de dúvidas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Relatório por escrito</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full shadow-md hover:shadow-lg transition-all">
                      Agendar Consulta
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/30 to-primary/5 opacity-100 blur-sm"></div>
                <Card className="relative h-full bg-background/80 backdrop-blur-sm border-primary shadow-lg flex flex-col">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-md">
                      Mais Procurado
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Representação Processual</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold">Sob consulta</span>
                    </div>
                    <CardDescription className="text-base mt-2">
                      Representação completa em processos judiciais.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Análise detalhada do caso</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Elaboração de peças processuais</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Acompanhamento de audiências</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Interposição de recursos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Relatórios periódicos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Atendimento prioritário</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full bg-primary shadow-md hover:shadow-lg transition-all">
                      Solicitar Orçamento
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <Card className="relative h-full bg-background/80 backdrop-blur-sm border-primary/10 shadow-md flex flex-col">
                  <CardHeader>
                    <CardTitle>Assessoria Empresarial</CardTitle>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold">R$1.500</span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    <CardDescription className="text-base mt-2">
                      Suporte jurídico contínuo para empresas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="grid gap-3 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Consultoria ilimitada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Análise e elaboração de contratos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Gestão de riscos jurídicos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Reuniões mensais</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span>Desconto em processos judiciais</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full shadow-md hover:shadow-lg transition-all">
                      Contratar Serviço
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contato" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <Mail className="mr-2 h-3.5 w-3.5" />
                <span>Contato</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight max-w-[800px]">
                Precisando de assistência jurídica?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Entre em contato conosco hoje mesmo para uma consulta inicial gratuita e descubra como podemos ajudar.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row pt-4">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                  Agendar Consulta Gratuita <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/20 hover:bg-primary/5 transition-all"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm p-6 shadow-md group-hover:shadow-lg transition-all">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Telefone</h3>
                  <p className="text-muted-foreground">(31) 3841-4433</p>
                  <p className="text-muted-foreground">(31) 9 9943-4433</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm p-6 shadow-md group-hover:shadow-lg transition-all">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">E-mail</h3>
                  <p className="text-muted-foreground">rogeriofnogueira@gmail.com</p>
                  <p className="text-muted-foreground">rogerioferreiranogueira@gmail.com</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-70 blur-sm transition-all group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center space-y-4 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm p-6 shadow-md group-hover:shadow-lg transition-all">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Endereço</h3>
                  <p className="text-center text-muted-foreground">R. Marechal Floriano Peixoto, 46</p>
                  <p className="text-center text-muted-foreground">Centro, Coronel Fabriciano - MG</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
              <div className="flex items-center gap-2">
                <Scale className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold tracking-tight">Juris Consulta</span>
              </div>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                &copy; {new Date().getFullYear()} Juris Consulta Advogados Associados. Todos os direitos reservados.
              </p>
              <p className="text-center text-xs text-muted-foreground md:text-left">OAB/SP 12.345</p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Serviços</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Direito Civil
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Direito de Família
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Contratos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Responsabilidade Civil
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Carreira
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Recursos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Blog Jurídico
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Artigos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Glossário Jurídico
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-primary/10 pt-8 md:flex-row md:justify-between">
            <p className="text-center text-xs text-muted-foreground md:text-left">
              Este site tem caráter meramente informativo e não constitui oferta de serviços jurídicos.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-primary/10 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-primary/10 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-primary/10 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

