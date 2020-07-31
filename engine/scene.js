// The Three Day Engine
// Copyright(C) 2020 The TDE Team
//
// This program is free software: you can redistribute it and / or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License
// along with this program.If not, see https://www.gnu.org/licenses/.


let engine_currentScene = ""
let engine_selectedScene = 0
//let engine_i3_val = 0

let engine_scenes = []


function engine_changeScene(scene) {
    engine_currentScene = scene
    engine_loadCurrentScene()
}

function engine_addScene(scene_) {
    engine_scenes.push(scene_)
}

function engine_getCurrentScene() {
    return engine_currentScene
}

function engine_saveCurrentSceene(name_) {
    engine_addSceene({
        name: name_, 

        background: [engine_fixed_background],
        walls: [],
        objects: engine_objects,

        update: null,
        start: null
    })
}

function engine_loadCurrentScene() {
    for (let i = 0; i < engine_scenes.length; i++) {
        if (engine_currentScene === engine_scenes[i].name) {
            engine_selectedScene = i
            break
        }
    }

    engine_objects = engine_scenes[engine_selectedScene].objects
    engine_displayBackground(engine_scenes[engine_selectedScene].background)

    for (let i = 0; i < engine_scenes[engine_selectedScene].walls.length; i++) {
        for (let j = 0; j < engine_scenes[engine_selectedScene].walls[i].length; j++) {
            if (engine_scenes[engine_selectedScene].walls[i][j] != ' ') {
                engine_addObject('engine_object_type_wall', j, i, engine_scenes[engine_selectedScene].walls[i][j])
            }
        }
    }

    if(engine_scenes[engine_selectedScene].start != null) {
		engine_scenes[engine_selectedScene].start()
	}
}

function engine_updateCurrentScene() {
	if(engine_scenes[engine_selectedScene].update != null) {
		engine_scenes[engine_selectedScene].update()
	}
}