import img1 from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";
import img4 from "../../../img/img4.jpg";
import img5 from "../../../img/img5.jpg";
import img6 from "../../../img/img6.jpg";




export default function QuemSomos() {
    return (
        <section className="sectionQuemSomos" id="quemsomos">
        <div>
            <div className="divQuemSomosLeft">
                <h2 className="quemSomosT1">Quem Somos</h2>
                <p className="quemSomosP">O nosso espaço teve início nas atividades em julho de 2020 em meio a pandemia, inicialmente eram dada aulas de reforço domiciliar devido a grande procura e o deslocamento ficar difícil abrimos um local fixo para receber esses alunos, então começou a procura para crianças ficarem no local e receber apoio nas disciplinas da escola, então iniciamos o atendimento de alunos meio período e período integral como hotelzinho, hoje nossa equipe tem maior prazer em zelar cuidar e incentivar o desenvolvimento de cada aluno desde o berçário de 5 meses até alunos de reforço de até 10 anos, trabalhamos com flexibilidade de atendimento por hora até mensal a partir das 6:30 ás 19:00 de segunda a sexta.</p>
                <h2 className="quemSomosT2">Missão</h2>
                <p className="quemSomosP">A nossa missão é proporcionar educação de qualidade num ambiente afetuoso, visando desenvolver a potencialidade infinita e os dons naturais próprios de cada educando, trabalhando com amor e inclusão de todos.</p>
                <h2 className="quemSomosT3">Valores</h2>
                <p className="quemSomosP">Nosso valor é poder ter troca de conhecimento, um amadurecimento intelectual e amistoso, contribuindo assim para o convívio social e fazer com que o conhecimento seja desenvolvido de forma simples e agradável.</p>
            </div>

            <div className="divQuemSomosRight">
                <div className="divImagens">
                  <div>
                    <div className="img1"><img className="imgQuemSomos" src={img1} alt="descrição da imagem" /></div>
                    <div className="img2e3">
                        <div className="img2"><img className="imgQuemSomos" src={img2} alt="descrição da imagem" /></div>
                        <div className="img3"><img className="imgQuemSomos" src={img3} alt="descrição da imagem" /></div>
                    </div>
                  </div>
                    <div className="img456">
                        <div className="img4"><img className="imgQuemSomos" src={img4} alt="descrição da imagem" /></div>
                        <div className="img5"><img className="imgQuemSomos" src={img5} alt="descrição da imagem" /></div>
                        <div className="img6"><img className="imgQuemSomos" src={img6} alt="descrição da imagem" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}