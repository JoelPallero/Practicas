import './style.css'

import {BLOCK_SIZE, BOARD_WIDTH, BOARD_HEIGHT} from './const.js'

// Canvas init
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const points = document.querySelector('.points > span').innerText;
const point = parseInt(points);
canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

context.scale(BLOCK_SIZE, BLOCK_SIZE);

// Board Init
const board = [];

function boardCreation(BOARD_WIDTH, BOARD_HEIGHT) {
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        let boardX = []
        for (let j = 0; j < BOARD_WIDTH; j++) {
            boardX.push(0);
        }
        board.push(boardX);
    }
}

// Autodrop
let dropCounter = 0;
let lastTime = 0;

function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > 500) {
        piece.position.y++;
        dropCounter = 0;
        if (checkCollision()) {
            piece.position.y--;
            solidifyPiece();
            removeRow();
        }
    }
    draw();
    window.requestAnimationFrame(update);
}

function draw() {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = '#dddddd';
                context.fillRect(x, y, 1, 1);
            }
        });
    });

    if (piece.shape) {
        piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    context.fillStyle = '#ff0000';
                    context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
                }
            });
        });
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
        piece.position.x--;
        if (checkCollision()) {
            piece.position.x++;
        }
    }
    if (e.key === 'ArrowRight') {
        piece.position.x++;
        if (checkCollision()) {
            piece.position.x--;
        }
    }
    if (e.key === 'ArrowDown') {
        piece.position.y++;
        if (checkCollision()) {
            piece.position.y--;
            solidifyPiece();
            removeRow();
        }
    }
    if (e.key === 'ArrowUp') {
        rotatePiece();
    }
});

function rotatePiece() {
    const rotatedShape = [];
    for (let y = 0; y < piece.shape[0].length; y++) {
        const row = [];
        for (let x = piece.shape.length - 1; x >= 0; x--) {
            row.push(piece.shape[x][y]);
        }
        rotatedShape.push(row);
    }

    const posX = piece.position.x;
    const posY = piece.position.y;
    piece.shape = rotatedShape;

    // Check for collision and adjust position if necessary
    if (checkCollision()) {
        // If collision detected, adjust position
        let offset = 1;
        while (checkCollision()) {
            piece.position.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > piece.shape[0].length) {
                // If unable to resolve collision, revert the rotation
                piece.shape = rotatedShape.map((row, y) => row.map((_, x) => rotatedShape[rotatedShape.length - 1 - x][y]));
                piece.position.x = posX;
                piece.position.y = posY;
                return;
            }
        }
    }
}

// Tetrominoes (Shapes)
const PIECES = [
    // I-shape
    [[1, 1, 1, 1]],
    // O-shape
    [
        [1, 1],
        [1, 1]
    ],
    // T-shape
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    // J-shape
    [
        [1, 0, 0],
        [1, 1, 1]
    ],
    // L-shape (mirrored J)
    [
        [0, 0, 1],
        [1, 1, 1]
    ],
    // S-shape
    [
        [0, 1, 1],
        [1, 1, 0]
    ],
    // Z-shape
    [
        [1, 1, 0],
        [0, 1, 1]
    ]
];

let piece = {
    position: {
        x: Math.floor(BOARD_WIDTH / 2) - 1,
        y: 0
    },
    shape: PIECES[Math.floor(Math.random() * PIECES.length)]
}

// Collision
function checkCollision() {
    for (let y = 0; y < piece.shape.length; y++) {
        for (let x = 0; x < piece.shape[y].length; x++) {
            if (
                piece.shape[y][x] !== 0 && 
                (board[y + piece.position.y] && board[y + piece.position.y][x + piece.position.x]) !== 0
            ) {
                return true;
            }
        }
    }
    return false;
}

// Piece solidification
function solidifyPiece() {
    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value === 1) {
                board[y + piece.position.y][x + piece.position.x] = 1;
            }
        });
    });
    // Reset position
    piece.position.x = Math.floor(BOARD_WIDTH / 2) - 1;
    piece.position.y = 0;

    // Get random shape piece
    piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)];

    if (checkCollision()) {
        window.alert('Game Over');
        board.forEach( row => row.fill(0))
    }
}

// Remove complete solidified row
function removeRow() {
    const rowsToRemove = [];
    board.forEach((row, y) => {
        if (row.every(value => value === 1)) {
            rowsToRemove.push(y);
        }
    });

    rowsToRemove.forEach(y => {
        board.splice(y, 1);  // Fixed splice count
        const newRow = Array(BOARD_WIDTH).fill(0);
        board.unshift(newRow);
    });
}

function initPiece() {
    piece = {
        position: {
            x: Math.floor(BOARD_WIDTH / 2) - 1,
            y: 0
        },
        shape: PIECES[Math.floor(Math.random() * PIECES.length)]
    }
}

boardCreation(BOARD_WIDTH, BOARD_HEIGHT);
initPiece();
//update();