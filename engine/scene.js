let engine_current_sceene = ""
let engine_sceene_selected = 0
let engine_i3_val = 0

let engine_scenes = []


function change_sceene(sceene) {
    engine_current_sceene = sceene
    engine_load_cur_sceene()
}

function addSceene(sceene_) {
    engine_scenes.push(sceene_)
}

function getSceene() {
    return engine_current_sceene
}

function SaveCurrentSceene(name) {
    addSceene({
        sceene_name: name, sceene_bg: [
            engine_bg_symbols
        ],
        wall_objs: [
            
        ],
        game_objects: engine_objects
    })
}

function engine_load_cur_sceene() {
    for (let i = 0; i < engine_scenes.length; i++) {
        if (engine_current_sceene === engine_scenes[i].sceene_name) {
            engine_sceene_selected = i
        }
        console.log(engine_scenes[i].sceene_name)
    }

    //console.log(engine_scenes[engine_sceene_selected])

    engine_objects = engine_scenes[engine_sceene_selected].game_objects

    displayBackground(engine_scenes[engine_sceene_selected].sceene_bg)

    for (let i = 0; i < engine_scenes[engine_sceene_selected].wall_objs.length; i++) {
        for (let i2 = 0; i2 < engine_scenes[engine_sceene_selected].wall_objs[i].length; i2++) {
            if (engine_scenes[engine_sceene_selected].wall_objs[i][i2] != ' ') {
                addObject('engine_object_type_wall', i2, i, engine_scenes[engine_sceene_selected].wall_objs[i][i2])
            }
        }
    }
}