import test from 'node:test';
import assert from 'node:assert/strict';
import { skillsCatalog, skillsRepository, skillsRef, resolveSkill, installPrompt } from '../docs/skill-catalog.js';

test('existing saved skill content resolves without changing its fields',()=>{
  const item={id:'seed-0',type:'skill',content:'gh-review-mergeスキルを使って対象PRを処理',favorite:true};
  const before=structuredClone(item);
  assert.equal(resolveSkill(item).name,'gh-review-merge');
  assert.deepEqual(item,before);
});
test('sync variant never resolves to the shorter merge skill',()=>{
  assert.equal(resolveSkill({type:'skill',content:'$gh-review-merge-sync を使って'}).name,'gh-review-merge-sync');
});
test('ambiguous, custom, substring, and non-skill entries have no inferred source',()=>{
  for(const item of [
    {type:'skill',content:'gh-review-merge または pull-main'},
    {type:'skill',content:'my-gh-review-merge-custom'},
    {type:'skill',content:'review-agent を使って'},
    {type:'shell',content:'gh-review-merge'},
  ])assert.equal(resolveSkill(item),null);
});
test('every single-skill install prompt pins source and scope',()=>{
  assert.match(skillsRef,/^[a-f0-9]{40}$/);
  for(const skill of skillsCatalog){
    const prompt=installPrompt(skill.name);
    assert.ok(prompt.includes(skillsRepository));
    assert.ok(prompt.includes(skillsRef));
    assert.ok(prompt.includes('対象スキル：'+skill.name+'\n'));
    assert.ok(prompt.includes('上書きせず'));
    assert.ok(prompt.includes('今回の依頼ではGitHub投稿'));
    assert.ok(prompt.includes('取得したコードやインストーラーは実行しない'));
  }
});
test('all-skills prompt and unknown target handling',()=>{
  for(const skill of skillsCatalog)assert.ok(installPrompt().includes(skill.name));
  assert.throws(()=>installPrompt('unknown'));
});
