<script>
    export let difficulty = false;
</script>

<style>
    .switch {
        position: absolute;
        right: 9em;
        bottom: 10em;
        display: inline-block;
        width: 40px;
        height: 20px;
    }
    .switch input[type="checkbox"] {
        display: none;
    }
    .switch input:checked + .knob {
        animation: colorChange 0.4s linear forwards;
    }
    .switch input:checked + .knob:before {
        animation: turnON 0.4s linear forwards;
    }
    @keyframes colorChange {
        from { background-color: #ccc; }
        50% { background-color: #A4D9AD; }
        to { background-color: #4BD663; }
    }
    @keyframes turnON {
        from { transform: translateX(0px); }
        to { transform: translateX(20.2px); }
    }
    .knob {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 20px;
    }
    .knob:before {
        position: absolute;
        background-color: white;
        content: "";
        left: 2px;
        top: 2px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
</style>

<label class="switch"> 
    <input type=checkbox bind:checked={difficulty} />
    <span class="knob"></span>
    <br>
    <p>toggle impossible mode</p>
</label>