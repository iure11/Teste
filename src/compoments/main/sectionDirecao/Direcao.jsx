import TituloSubtitulo from "../commom/DirecaoCommom";
import titulosDescrisoesSecoes from "../../../js/titulosDescrisoesSecoes"
import direcao from "../../../img/direcao.jpg";
export default function Direcao() {
  

    return (
        <section className="sectionDirecao">
            <div className="containerDirecao">
                <div className="tituloDirecao">

                    <h1>{titulosDescrisoesSecoes.direcao.titulo}</h1>
                    <hr className="linhaTitulo" />
                    <p>{titulosDescrisoesSecoes.direcao.descricao}</p>

                </div>
                <div className="direcao">
                    <div className="imagemDirecao">
                    <img src={direcao} alt="" />
                    </div>
                    <div className="infoDirecao">
                        <p>Meu nome é Ana Cláudia, sou diretora e responsável pela instituição, sou formada em pedagogia e pós graduada em educação especial e atendimento especializado, faço com amor e dedicação meu trabalho e zelo pelo cuidado e transformação de cada criança. Sou grata a Deus pela oportunidade de fazer a diferença na vida de cada criança juntamente com meus pais Luis Carlos e Elena Yara que tem sido meu apoio na nossa missão de acrescentar conhecimento na vida de cada criança.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}