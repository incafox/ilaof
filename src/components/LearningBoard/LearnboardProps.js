import ImageLevel1 from './../../assets/img/LearnBoard/ImageLevel1.svg'
import ImageLevel2 from './../../assets/img/LearnBoard/ImageLevel2.svg'
import ImageLevel3 from './../../assets/img/LearnBoard/ImageLevel3.svg'
import class1_Level1 from './../../assets/img/LearnBoard/class1_Level1.svg'
import class2_Level1 from './../../assets/img/LearnBoard/class2_Level1.svg'
import class3_Level1 from './../../assets/img/LearnBoard/class3_Level1.svg'
import class4_Level1 from './../../assets/img/LearnBoard/class4_Level1.svg'
import class1_Level2 from './../../assets/img/LearnBoard/class1_Level2.svg'
import class2_Level2 from './../../assets/img/LearnBoard/class2_Level2.svg'
import class3_Level2 from './../../assets/img/LearnBoard/class3_Level2.svg'
import class4_Level2 from './../../assets/img/LearnBoard/class4_Level2.svg'
import class1_Level3 from './../../assets/img/LearnBoard/class1_Level3.svg'
import class2_Level3 from './../../assets/img/LearnBoard/class2_Level3.svg'
import class3_Level3 from './../../assets/img/LearnBoard/class3_Level3.svg'
import class4_Level3 from './../../assets/img/LearnBoard/class4_Level3.svg'

export const initialState = [
    {
        id: 1, level: 1, imageLevel: ImageLevel1, title: 'A cocinar',
        modules: [
            { id: 1, Logo: class1_Level1, progress: 100 },
            { id: 2, Logo: class2_Level1, progress: 100 },
            { id: 3, Logo: class3_Level1, progress: 100 },
            { id: 4, Logo: class4_Level1, progress: 100 }
        ],
        menssage: '¡Felicidades!',
        average: '9.8',
        status: 'Available'
    },
    {
        id: 2, level: 2, imageLevel: ImageLevel2, title: 'Test',
        modules: [
            { id: 1, Logo: class1_Level2, progress: 100 },
            { id: 2, Logo: class2_Level2, progress: 100 },
            { id: 3, Logo: class3_Level2, progress: 100 },
            { id: 4, Logo: class4_Level2, progress: 100 }
        ],
        menssage: '¡Felicidades!',
        average: '9.7',
        status: 'Available'
    },
    {
        id: 3, level: 3, imageLevel: ImageLevel3, title: 'Test',
        modules: [
            { id: 1, Logo: class1_Level3, progress: 100 },
            { id: 2, Logo: class2_Level3, progress: 100 },
            { id: 3, Logo: class3_Level3, progress: 100 },
            { id: 4, Logo: class4_Level3, progress: 100 }
        ],
        menssage: '¡Felicidades!',
        average: '9.8',
        status: 'Available'
    },
    {
        id: 4, level: 4, imageLevel: ImageLevel2, title: 'Test',
        modules: [
            { id: 1, Logo: class1_Level2, progress: 100 },
            { id: 2, Logo: class2_Level2, progress: 100 },
            { id: 3, Logo: class3_Level2, progress: 100 },
            { id: 4, Logo: class4_Level2, progress: 50 }
        ],
        menssage: 'Ya casi acabamos',
        average: '--',
        status: 'Available'
    },
    {
        id: 5, level: 5, imageLevel: ImageLevel2, title: 'Test',
        modules: [
            { id: 1, Logo: class1_Level2, progress: 0 },
            { id: 2, Logo: class2_Level2, progress: 0 },
            { id: 3, Logo: class3_Level2, progress: 0 },
            { id: 4, Logo: class4_Level2, progress: 0 }
        ],
        menssage: 'Nivel bloqueado',
        average: '--',
        status: 'Locked'
    },
]
