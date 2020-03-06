import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'


const Task_soup = ({ props, currentTask, setCurrentTask }) => {
    const [state, setState] = useState("loading")
    useEffect(() => {
        // setTimeout(()=>{
        //     setState("loaded")
        //     alert("loaded")
        // },2000)
        let taks = document.getElementById("puzzle").dataset.solve !== null ? document.getElementById("puzzle").dataset.solve : null;
        if (taks === "complete" && currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                status: "success"
            })
        else if (currentTask.status === "checking")
            setCurrentTask({
                ...currentTask,
                status: "wrong"
            })
    }, [currentTask])
    return (
        <div className="TaskType-sound TaskType-soup" id="soup_container">
            <div id="main" role="main" data-state={state}>
                <ul id="words">
                    <li id="add-words"></li>
                </ul>
                <div id="puzzle" data-solve="incomplete"></div>
            </div>
            <Helmet>
                <script type="text/javascript" async>{`
                    const create_soup = () => {
                        const words = ${props.words};
                        words.map(word => WordFindGame.insertWordBefore(document.getElementById("add-words"), word));

                        /* Init */
                        function recreate() {
                            var fillBlanks, game;

                            try {
                                game = new WordFindGame('#puzzle', {
                                    allowedMissingWords: +0,
                                    maxGridGrowth: +0,
                                    fillBlanks: fillBlanks,
                                    maxAttempts: 100000,
                                    height: 10,
                                    width: 10
                                });
                            } catch (error) {
                                return;
                            }
                            wordfind.print(game);
                            if (window.game) {
                                var emptySquaresCount = WordFindGame.emptySquaresCount();
                            }
                            window.game = game;
                        }
                        recreate();
                    }
                    create_soup()`}
                </script>
            </Helmet>
        </div>
    )

}

export default Task_soup
