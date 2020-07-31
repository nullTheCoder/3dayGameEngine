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

let additional_animated_scenes = []

let additional_interval_toggle

let additional_set_functionToCall = []

let additional_current_anim

let additional_current_frame = 0

function additional_addAnimatedScene(name, timingInSec, animation) {
    additional_animated_scenes.push({ scene_name: name, time_betwen_frames: timingInSec,animation:animation})
}

function additional_playAnimationScene(name, functionToCall) {
    for (let i = 0; i < additional_animated_scenes.length; i++) {
        if (name === additional_animated_scenes[i].scene_name) {
            additional_current_anim = i
        }
    }

    additional_current_frame = 0

    engine_objects = []
    additional_interval_toggle = setInterval(additional_play_frame, additional_animated_scenes[additional_current_anim].time_betwen_frames * 1000)
    additional_set_functionToCall[0] = functionToCall
}

function additional_play_frame() {

    if (additional_animated_scenes[additional_current_anim].animation[additional_current_frame] === undefined) {
        additional_set_functionToCall[0]()
        clearInterval(additional_interval_toggle)
        return
    }
    engine_displayBackground(additional_animated_scenes[additional_current_anim].animation[additional_current_frame])
    engine_render()
    additional_current_frame++

}